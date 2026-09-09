# Custom Domain on GitHub Pages - Complete Guide

You want `balawedsbhavana.com` instead of `BalaManikantaB.github.io/wedding-invitation/`? Here's how - ₹600/year domain only, hosting still ₹0.

## Your Options

| Type | Example | Clean? | Cost |
|------|---------|--------|------|
| GitHub default | `BalaManikantaB.github.io/wedding-invitation/` | ✅ No xxx | ₹0 |
| Netlify clean | `bala-weds-bhavana.netlify.app` | ✅ No xxx | ₹0 |
| **Custom domain** | **`balawedsbhavana.com`** | **✅✅ Premium** | **~₹600/year** |

Custom domain is optional but looks best on wedding cards.

---

## STEP 1: Buy Domain (5 minutes, ~₹600)

Buy from any registrar - cheapest in India:

1. **Hostinger** - ₹599/year - https://www.hostinger.in/domain-name-search
2. **Namecheap** - $9/year (~₹750) - https://www.namecheap.com
3. **GoDaddy** - ₹700/year - https://www.godaddy.com
4. **Cloudflare Registrar** - $9/year (cheapest renewal)

**Suggested names to check:**
- `balawedsbhavana.com` (best)
- `balaandbhavana.com`
- `bala-bhavana.com`
- `balabhavanawedding.com`

Pick one, buy it. You'll get access to DNS management.

---

## STEP 2: Configure DNS (2 minutes)

This tells your domain to point to GitHub Pages.

### Option A: Apex domain (recommended) - `balawedsbhavana.com`

Go to your domain's **DNS Management** and add these 4 A records + 1 CNAME:

```
Type: A | Name: @ | Value: 185.199.108.153 | TTL: Auto
Type: A | Name: @ | Value: 185.199.109.153 | TTL: Auto
Type: A | Name: @ | Value: 185.199.110.153 | TTL: Auto
Type: A | Name: @ | Value: 185.199.111.153 | TTL: Auto

Type: CNAME | Name: www | Value: BalaManikantaB.github.io | TTL: Auto
```

### Option B: Subdomain only - `www.balawedsbhavana.com`

```
Type: CNAME | Name: www | Value: BalaManikantaB.github.io | TTL: Auto
```

### Where to add in each registrar:

**Hostinger:**
- hPanel > Domains > DNS Zone Editor > Add records

**GoDaddy:**
- My Products > DNS > Manage DNS > Add

**Cloudflare (fastest, recommended):**
- Add site to Cloudflare (free plan)
- DNS > Add records above
- SSL mode: Full
- Proxy: DNS only (gray cloud) first, then orange cloud after verification

**Namecheap:**
- Domain List > Manage > Advanced DNS > Add New Record

---

## STEP 3: Enable Custom Domain in GitHub (1 minute)

1. Go to: https://github.com/BalaManikantaB/wedding-invitation/settings/pages
2. Under **Custom domain**, enter: `balawedsbhavana.com`
3. Click **Save**
4. Wait 2-5 minutes, GitHub will verify DNS and show green check
5. Check **Enforce HTTPS** - will become available after 10-30 min (GitHub issues free Let's Encrypt cert)

GitHub will automatically create a `CNAME` file in your repo.

### If you want to add CNAME file manually:

Create file `CNAME` in repo root (no extension) with single line:

```
balawedsbhavana.com
```

Then push:
```bash
echo "balawedsbhavana.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

---

## STEP 4: Update Your Site URLs (1 minute)

After custom domain works, update these 2 files and push:

**`config.js`:**
```js
siteUrl: "https://balawedsbhavana.com/"
```

**`index.html` line 11-12:**
```html
<meta property="og:image" content="https://balawedsbhavana.com/assets/og.jpg" />
<meta property="og:url" content="https://balawedsbhavana.com/" />
```

```bash
git add config.js index.html
git commit -m "Update URLs to custom domain"
git push origin main
```

Wait 1-2 min for Pages to redeploy.

---

## STEP 5: Test

1. Open `https://balawedsbhavana.com` - should show invitation
2. HTTPS lock icon should appear
3. WhatsApp test: share link to yourself, should show cream card preview
   - If not showing, clear Facebook cache: https://developers.facebook.com/tools/debug/
4. `www.balawedsbhavana.com` should redirect to apex

---

## Troubleshooting

**Domain not working after 1 hour?**
- Check DNS: https://dnschecker.org/#A/balawedsbhavana.com - should show 185.199.108.153 etc.
- Wait up to 24h (usually 5-15 min)

**HTTPS not working?**
- Wait 30 min after DNS, GitHub issues cert
- Then check Enforce HTTPS

**CNAME file keeps disappearing?**
- That's normal, GitHub manages it when you set custom domain in settings

---

## Cost

- Domain: ~₹600-800/year
- GitHub Pages: ₹0 forever
- SSL: ₹0 (free Let's Encrypt via GitHub)
- **Total for 2 months: ~₹600 one-time**

You can keep domain for memories or let it expire after wedding.

---

## Quick Setup Script

Tell me your domain (e.g., `balawedsbhavana.com`) and I'll run:

```bash
echo "balawedsbhavana.com" > CNAME
# Update config.js and index.html
git add CNAME config.js index.html
git commit -m "Add custom domain balawedsbhavana.com"
git push origin main
```

Just tell me the domain name!
