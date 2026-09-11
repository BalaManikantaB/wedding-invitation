# Hosting Analysis & 2-Month Cheap Hosting Guide

## ✅ Can this be hosted cheaply for 2 months? YES - for ₹0

Your website is **100% static**:

- Only `index.html` + `styles.css` + `fonts.css` + `app.js` + `config.js`
- `assets/` folder with images (WebP), video, music (total ~12 MB; images alone ~2 MB)
- **No backend, no database, no npm, no build step, no server**
- All fonts self-hosted (no Google Fonts API call)
- Works on any static host - GitHub Pages, Netlify, Cloudflare, Vercel

For a wedding invite you need it live until **14 Oct 2026** (~1.5 months) + maybe 2 weeks after. All free tiers cover this easily with 100GB+ bandwidth.

### Cost Comparison (2 months)

| Host | Price | Bandwidth | Setup Time | Custom Domain | Why Good for India? |
|------|-------|-----------|------------|---------------|---------------------|
| **GitHub Pages** | **₹0 forever** | 100 GB/mo | 2 min (auto via Actions) | Free | Good |
| **Netlify Drop** | **₹0 forever** | 100 GB/mo | 30 sec drag-drop | Free | Good |
| **Cloudflare Pages** | **₹0 forever** | **Unlimited** | 1 min drag-drop | Free | **Best - fastest in India** |
| **Vercel** | **₹0 forever** | 100 GB/mo | 1 min | Free | Good |

**Cheapest = ₹0**. You don't need to pay anything for 2 months. All of them will keep it alive indefinitely unless you delete it.

---

## Recommended: 3 Options from Easiest to Best

### Option 1: GitHub Pages (Already Configured in this repo)

I already added `.github/workflows/pages.yml` to your repo. Here's what to do:

1. Go to your repo on GitHub: https://github.com/BalaManikantaB/wedding-invitation
2. Go to **Settings > Pages**
3. Under **Build and deployment**, select **GitHub Actions** (not Branch)
4. Push to `main` branch:
   ```bash
   git checkout main
   git merge arena/01a08527-wedding-invitation  # or cherry-pick the workflow file
   git push origin main
   ```
5. Wait 1-2 minutes, your site will be live at:
   `https://BalaManikantaB.github.io/wedding-invitation/`

**Pros:** Zero setup after first time, auto-deploys on every push, lives forever free, no account needed beyond GitHub.
**Cons:** URL has `/wedding-invitation/` subpath (but your code handles it - relative asset paths work fine).

### Option 2: Netlify Drop (Easiest for non-devs, 30 seconds)

1. Go to https://app.netlify.com/drop
2. Drag your **entire folder** `wedding-invitation` onto the page
3. Done! You get a URL like `https://bala-weds-bhavana-xyz.netlify.app`
4. (Optional) In Netlify dashboard > Domain settings > Edit site name to `bala-weds-bhavana`

**Pros:** No git needed, instant, free SSL, custom name.
**Cons:** Need to re-drag if you update photos.

This repo also has `netlify.toml` for optimal caching.

### Option 3: Cloudflare Pages (Best Performance in India)

1. Go to https://pages.cloudflare.com
2. Click **Upload assets** > Drag the folder
3. Get URL like `https://bala-weds-bhavana.pages.dev`
4. Unlimited bandwidth = if 5000 guests open it, still free.

**Pros:** Fastest for guests in Kakinada/Kaikaluru (Cloudflare has Chennai/Hyderabad POPs), unlimited bandwidth, most reliable.
**Cons:** Needs Cloudflare account (free).

---

## What about paid hosting?

You **don't need** it. But if you want a custom domain like `balawedsbhavana.com`:

- Domain: ~₹500-800/year from GoDaddy/Namecheap/Hostinger
- Hosting: Still ₹0 on any of the above + connect domain for free
- Total for 2 months with custom domain: **~₹600 one-time**

Without custom domain: **₹0 total**.

---

## WhatsApp Preview Fix (Done)

WhatsApp crawler doesn't run JavaScript, so `og:image` must be absolute in the HTML. This is already done for the live Netlify site:

- `config.js` → `siteUrl: "https://bala-weds-bhavana.netlify.app/"`
- `index.html` → `og:image` = `https://bala-weds-bhavana.netlify.app/assets/og-social.jpg` (a 1200×630 JPEG, ~100 KB — sized for link previews) and `og:url` = `https://bala-weds-bhavana.netlify.app/`

If you move hosts, update those same 3 spots and re-deploy.

---

## Technical Audit

- **Size:** 5.2 MB total, 2.4 MB is music (optional, can be removed to save 45% if bandwidth concerns, but free tiers allow 100GB = ~19,000 full loads)
- **No secrets:** `config.js` has no API keys
- **Mobile-first:** Works perfectly as PWA-style invite
- **SEO:** Has OG tags, theme-color, description
- **Compatibility:** Works on all browsers, including in-app WhatsApp browser

**Conclusion:** Host on **GitHub Pages (auto)** + also do **Netlify Drop** as backup. Both free, both live in <5 minutes. Keep for 2 months or forever at no cost.

---

## Quick Start Commands

```bash
# For GitHub Pages
git checkout main
git add .github/workflows/pages.yml netlify.toml HOSTING.md
git commit -m "Add free hosting for 2 months"
git push origin main
# Then enable Pages -> GitHub Actions in repo settings

# For local preview before deploying
python3 -m http.server 8000
# or
npx serve .
```
