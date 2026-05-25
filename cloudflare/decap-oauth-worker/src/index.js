const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(env) });
    }

    if (url.pathname === "/auth") {
      return redirectToGithub(url, env);
    }

    if (url.pathname === "/callback") {
      return handleCallback(url, env);
    }

    return new Response("Not found", { status: 404, headers: corsHeaders(env) });
  }
};

function redirectToGithub(url, env) {
  const scope = url.searchParams.get("scope") || "repo,user";
  const state = url.searchParams.get("state") || crypto.randomUUID();
  const redirectUri = `${url.origin}/callback`;
  const authorizeUrl = new URL(GITHUB_AUTHORIZE_URL);

  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", scope);
  authorizeUrl.searchParams.set("state", state);

  return Response.redirect(authorizeUrl.toString(), 302);
}

async function handleCallback(url, env) {
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state") || "";

  if (!code) {
    return htmlResponse(errorHtml("Missing GitHub OAuth code."), 400, env);
  }

  const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "max-digital-garden-decap-oauth"
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
      state
    })
  });

  const tokenPayload = await tokenResponse.json();

  if (!tokenResponse.ok || tokenPayload.error) {
    const message = tokenPayload.error_description || "GitHub token exchange failed.";
    return htmlResponse(errorHtml(message), 502, env);
  }

  return htmlResponse(successHtml(tokenPayload), 200, env);
}

function successHtml(payload) {
  const responsePayload = JSON.stringify({
    token: payload.access_token,
    provider: "github"
  });

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Authentication complete</title>
  </head>
  <body>
    <script>
      const payload = ${JSON.stringify(responsePayload)};
      if (window.opener) {
        window.opener.postMessage("authorization:github:success:" + payload, "*");
      }
      window.close();
    </script>
    <p>Authentication complete. You can close this window.</p>
  </body>
</html>`;
}

function errorHtml(message) {
  const safeMessage = escapeHtml(message);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Authentication failed</title>
  </head>
  <body>
    <script>
      if (window.opener) {
        window.opener.postMessage("authorization:github:error:${safeMessage}", "*");
      }
    </script>
    <p>${safeMessage}</p>
  </body>
</html>`;
}

function htmlResponse(body, status, env) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      ...corsHeaders(env)
    }
  });
}

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
