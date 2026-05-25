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

The Decap OAuth Worker is configured at:

```text
https://max-digital-garden-decap-oauth.askapimax.workers.dev
```

Create a GitHub OAuth app with callback:

```text
https://max-digital-garden-decap-oauth.askapimax.workers.dev/callback
```

Set Worker secrets:

```bash
npm run worker:secret:client-id
npm run worker:secret:client-secret
```

In GitHub repository settings, set Pages source to GitHub Actions.

## Content

Posts live in `src/content/blog`. Draft posts use:

```yaml
draft: true
```

Drafts are hidden from the public site and RSS feed.
