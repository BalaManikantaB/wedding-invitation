# Wedding invitation website

A mobile-first, long-scroll invitation in the same spirit as the Artful Invites reel — original temple art, Telugu wedding flow, photo placeholders, countdown, and WhatsApp RSVP.

## Personalise (2 minutes)

Open `config.js` and set:

- Couple names
- Parent / grandparent names
- Instagram hashtag
- WhatsApp number (`9198XXXXXXXX`)
- Reception & marriage venues (when you have them)

Then drop real photos into `assets/photos/` — see the README in that folder.

Optional: add `assets/music.mp3` for background music (the play button is already on the page).

Set `whatsapp` to enable the real RSVP button (it replaces the placeholder automatically).

Original flat artwork and unused source renders live in `source-art/` — the site only ships `assets/`, keeping the deploy small.

## Host for ~1.5 months (until 14 Oct 2026)

This sandbox preview is only for us to look at it now. For family WhatsApp sharing you need a public URL.

Easiest free options:

1. **Netlify Drop** — go to [app.netlify.com/drop](https://app.netlify.com/drop), drag the whole `wedding-invite` folder. You get a link like `https://something.netlify.app`. Free Netlify account keeps it live as long as you need.
2. **Cloudflare Pages** — [pages.cloudflare.com](https://pages.cloudflare.com), upload the folder. Very reliable, free.
3. **Vercel** — drag-and-drop or CLI, free.

After you have the public URL, paste it into `siteUrl` in `config.js` so WhatsApp’s link preview uses the temple image.

Cost: **₹0**. These free plans are more than enough for a 6-week invite.
