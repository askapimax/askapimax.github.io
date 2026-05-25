# Max Digital Garden

Astro blog with Markdown content, Decap CMS, GitHub Pages deployment, and a Cloudflare Worker OAuth proxy for GitHub login.

## Local development

```bash
npm install
npm run dev
```

Open the local Astro URL and visit `/admin/` for Decap.

For local CMS edits, run this in a second terminal:

```bash
npm run cms
```

## Configure before publishing

Replace this placeholder:

- `your-cloudflare-worker-domain` in `public/admin/config.yml`
- Cloudflare Worker values in `cloudflare/decap-oauth-worker/wrangler.toml.example`

Create a GitHub OAuth app with callback:

```text
https://your-cloudflare-worker-domain/callback
```

Set Worker secrets:

```bash
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
```

In GitHub repository settings, set Pages source to GitHub Actions.

## Content

Posts live in `src/content/blog`. Draft posts use:

```yaml
draft: true
```

Drafts are hidden from the public site and RSS feed.
