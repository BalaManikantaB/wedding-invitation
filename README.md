# Wedding invitation website — Bala weds Bhavana

A mobile-first, long-scroll invitation — original temple art, Telugu wedding flow, photo placeholders and countdown.

**Live URLs (clean, no xxx):**
- GitHub Pages: `https://BalaManikantaB.github.io/wedding-invitation/` (permanent, ₹0)
- Netlify: `https://bala-weds-bhavana.netlify.app` (after you rename, ₹0)

## Deploy NOW - Clean URLs (No Random Letters)

### GitHub Pages - 2 minutes

1. Go to https://github.com/BalaManikantaB/wedding-invitation/settings/pages
2. Source: **Deploy from a branch** > Branch: **main** / **root** > Save
3. Live in 1-2 min at `https://BalaManikantaB.github.io/wedding-invitation/`

Or with Actions (see `DEPLOY_CLEAN_URLS.md` for workflow file).

### Netlify - 1 minute - Clean Name

1. https://app.netlify.com/drop → Drag entire folder
2. Site settings > Change site name → `bala-weds-bhavana` (or `balawedsbhavana`)
3. Live at `https://bala-weds-bhavana.netlify.app` — no xxx!

Full guide: `DEPLOY_CLEAN_URLS.md` and `HOSTING.md`

## Personalise (2 minutes)

Open `config.js` and set:

- Couple names
- Parent names
- Instagram hashtag
- `siteUrl` already set to GitHub Pages clean URL

Then drop real photos into `assets/photos/` — see the README in that folder.

Optional: `assets/music.mp3` for background music (play button already on page).

## Hosting Cost for 2 Months

**₹0 total.** GitHub Pages + Netlify free forever, 100GB+ bandwidth, SSL included. This site is only 6.5MB, no backend.

For WhatsApp preview, `og:image` and `og:url` are already absolute (`https://BalaManikantaB.github.io/wedding-invitation/assets/og.jpg`). If you use Netlify clean URL, update those 2 lines in `index.html` and `siteUrl` in `config.js`.

## Files for Hosting

- `netlify.toml` - caching headers
- `vercel.json` - Vercel config
- `DEPLOY_CLEAN_URLS.md` - step-by-step clean URLs
- `HOSTING.md` - full analysis
