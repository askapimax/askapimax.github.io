# Decap GitHub OAuth Worker

Small Cloudflare Worker that provides the OAuth endpoints Decap needs when the site itself is hosted on GitHub Pages.

## Setup

1. Log in to Cloudflare:

```bash
npx wrangler login
```

2. Deploy once to get the Worker URL:

```bash
npm run worker:deploy
```

3. Create a GitHub OAuth App.
4. Use this callback URL:

```text
https://your-cloudflare-worker-domain/callback
```

5. Set secrets:

```bash
npm run worker:secret:client-id
npm run worker:secret:client-secret
```

6. Deploy:

```bash
npm run worker:deploy
```

Then set `backend.base_url` in `public/admin/config.yml` to the Worker URL.
