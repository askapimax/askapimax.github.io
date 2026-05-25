# Decap GitHub OAuth Worker

Small Cloudflare Worker that provides the OAuth endpoints Decap needs when the site itself is hosted on GitHub Pages.

## Setup

1. Copy `wrangler.toml.example` to `wrangler.toml`.
2. Set the Worker name and route/domain.
3. Create a GitHub OAuth App.
4. Use this callback URL:

```text
https://your-cloudflare-worker-domain/callback
```

5. Set secrets:

```bash
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
```

6. Deploy:

```bash
wrangler deploy
```

Then set `backend.base_url` in `public/admin/config.yml` to the Worker URL.
