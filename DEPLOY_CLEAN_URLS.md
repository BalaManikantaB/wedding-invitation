# ✅ Deploy Now - Clean URLs (No xxx)

You asked for no random letters like `cute-panda-abc123`. Here's how to get clean URLs on both platforms.

## Your Clean URLs Will Be:

**GitHub Pages (Recommended - permanent, clean, no xxx):**
```
https://BalaManikantaB.github.io/wedding-invitation/
```
- No random characters, uses your GitHub username
- Free forever, auto-updates when you push to main
- Already configured in `config.js` and `index.html`

**Netlify (Clean name you choose):**
```
https://bala-weds-bhavana.netlify.app
```
- You choose the name `bala-weds-bhavana` - no xxx
- If taken, try: `bala-bhavana-wedding`, `balawedsbhavana`, `bala-bhavana-2026`
- Free forever

---

## STEP 1: Enable GitHub Pages (2 minutes) - CLEAN URL

Since the GitHub App cannot push workflow files, do this once manually:

### Option A: Classic Pages (Easiest, no workflow needed)

1. Go to https://github.com/BalaManikantaB/wedding-invitation/settings/pages
2. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root** 
3. Click Save
4. Wait 1-2 minutes, your site will be live at:
   **https://BalaManikantaB.github.io/wedding-invitation/**
5. Test WhatsApp preview: share the link, it should show the cream invitation card

### Option B: GitHub Actions (Modern, faster)

1. Go to https://github.com/BalaManikantaB/wedding-invitation/new/main?filename=.github/workflows/pages.yml
2. Copy-paste this content:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - uses: actions/deploy-pages@v4
        id: deployment
```

3. Click **Commit changes** > Commit directly to main
4. Then go to Settings > Pages > Build and deployment > Source: **GitHub Actions**
5. Wait 1-2 min, live at same URL

**Both options give same clean URL, no xxx.**

---

## STEP 2: Netlify with Clean Name (1 minute) - NO XXX

1. Go to https://app.netlify.com/drop
2. Drag your **entire `wedding-invitation` folder** (the one with index.html)
3. You'll get a random URL like `https://random-name-123.netlify.app` - **don't share this yet**
4. Immediately:
   - Click **Domain settings** (or Site settings > Change site name)
   - Click **Edit site name** 
   - Type: `bala-weds-bhavana`
   - If taken, try: `bala-bhavana-wedding` or `balawedsbhavana` or `bala-bhavana-2026`
   - Save
5. Your clean URL is now:
   **https://bala-weds-bhavana.netlify.app**

6. **Update for WhatsApp preview** (optional, if you want to use Netlify URL instead of GitHub):
   - Edit `config.js`: `siteUrl: "https://bala-weds-bhavana.netlify.app/"`
   - Edit `index.html`:
     ```html
     <meta property="og:image" content="https://bala-weds-bhavana.netlify.app/assets/og.jpg" />
     <meta property="og:url" content="https://bala-weds-bhavana.netlify.app/" />
     ```
   - Re-drag folder to Netlify Drop (or push to GitHub if you connected Netlify to GitHub)

**Netlify clean name is free, you can change it anytime, no xxx.**

---

## Which URL to share?

**Share GitHub Pages URL** for now:
```
https://BalaManikantaB.github.io/wedding-invitation/
```
- It's already set in your code
- Clean, no xxx, permanent
- Works for 2 months and beyond

If you get `bala-weds-bhavana.netlify.app`, you can share that too - both work. Pick one as primary.

---

## Cost for 2 Months

- GitHub Pages: **₹0**
- Netlify: **₹0**
- Total: **₹0**

Both will stay live forever unless you delete them. No need to pay.

---

## After Deploy Checklist

- [ ] Open your live URL on phone
- [ ] Test "Open invitation" button
- [ ] Share on WhatsApp to yourself - check if preview image shows (og.jpg)
- [ ] If preview doesn't show, wait 5 min and try https://developers.facebook.com/tools/debug/ to clear cache
- [ ] Share with family

Your site is 6.5MB, loads fast on 4G in Kakinada/Kaikaluru.

---

## Need Custom Domain? (Optional, ~₹600)

If you want `balawedsbhavana.com` (no github/netlify in URL):
1. Buy domain from Hostinger/GoDaddy (~₹600/year)
2. In Netlify: Domain settings > Add custom domain
3. Or in GitHub Pages: Settings > Pages > Custom domain
4. Still ₹0 hosting, only domain cost

But for 2 months, the free clean URLs above are perfect.
