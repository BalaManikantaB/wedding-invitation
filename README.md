# Wedding invitation website

A mobile-first, long-scroll invitation in the same spirit as the Artful Invites reel — original temple art, Telugu wedding flow, photo placeholders and countdown.

## Personalise (2 minutes)

Open `config.js` and set:

- Couple names
- Parent names
- Instagram hashtag
- Reception & marriage venues (when you have them)

Then drop real photos into `assets/photos/` — see the README in that folder.

Optional: add `assets/music.mp3` for background music (the play button is already on the page).

Original flat artwork and unused source renders live in `source-art/` — the site only ships `assets/`, keeping the deploy small.

## Host for ~1.5 months (until 14 Oct 2026)

This sandbox preview is only for us to look at it now. For family WhatsApp sharing you need a public URL.

Easiest free options:

1. **Netlify Drop** — go to [app.netlify.com/drop](https://app.netlify.com/drop), drag the whole `wedding-invite` folder. You get a link like `https://something.netlify.app`. Free Netlify account keeps it live as long as you need.
2. **Cloudflare Pages** — [pages.cloudflare.com](https://pages.cloudflare.com), upload the folder. Very reliable, free.
3. **Vercel** — drag-and-drop or CLI, free.

After you have the public URL, paste it into `siteUrl` in `config.js`. WhatsApp’s crawler does not run JavaScript, so also paste the absolute image URL into the `og:image` tag in `index.html` (e.g. `https://your-site.netlify.app/assets/og.jpg`) — the shared preview shows the traditional cream lagna-patrika card with the couple's names and dates. The page script keeps `og:image`/`og:url` absolute automatically for in-app browsers.

Cost: **₹0**. These free plans are more than enough for a 6-week invite.
