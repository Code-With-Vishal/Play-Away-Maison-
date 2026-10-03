# Play Away Maison — waitlist site

Static site. No build step. Upload the folder to any static host (Netlify, Vercel, Cloudflare Pages, S3).

```
index.html        Home: all 9 sections, inline CSS + JS
thank-you.html    "You're on the list." + Instagram link + sign-up conversion pixels
privacy.html      Plain-language privacy policy
assets/
  hero-loop.mp4   Hero loop, H.264 (158 KB, 10.4 s)
  hero-loop.webm  Hero loop, VP9 fallback (102 KB)
  hero-poster.*   Still poster, shown until the video plays (and permanently on reduced-motion / Save-Data)
  pixels.js       Meta + TikTok pixel loader (shared by all pages)
```

## 1. Connect the form (index.html → `window.PAM_FORM`)

| provider    | set                                        | double opt-in                        |
|-------------|--------------------------------------------|--------------------------------------|
| `webhook`   | `webhook.url` (n8n / Make / Zapier)        | handled by the ESP you forward to    |
| `kit`       | `kit.formId` + `kit.tagIds`                | Kit form settings → turn on          |
| `mailchimp` | `mailchimp.action` + `mailchimp.tagIds`    | on by default for embedded forms     |

- Each "I am interested in" choice is sent as a tag: `tennis-retreat`, `golf-retreat`, `two-night-getaway`, `not-sure`.
- Webhook payload also carries `attribution` (utm_*, fbclid, ttclid, referrer) for source tracking.
- Until a provider is configured, the form shows an error on live domains and only redirects on localhost (preview).

## 2. Questionnaire fields

Add fields inside the form where marked `QUESTIONNAIRE FIELDS`. Copy the `.field` pattern.
Every named `input` / `select` / `textarea` is sent automatically (webhook: as JSON keys; Kit: as `fields[name]` custom fields — create them in Kit first).

## 3. Pixels

Replace `META_PIXEL_ID` and `TIKTOK_PIXEL_ID` in `assets/pixels.js`.
- PageView on every page.
- Conversion on thank-you.html: Meta `Lead`, TikTok `CompleteRegistration`, with the interest as `content_category`.
- Pixels load on idle, after the page is usable, so they do not affect load time.
- Selling into UK/EU traffic? Add a consent banner before pixels fire.

## 4. Launch checklist — placeholders still to confirm

Search the code for `[` and `_HANDLE` / `_ID`:

- [ ] `[PROPERTY DETAILS TO COME]` — The stay
- [ ] Real photos: estate aerial, pool & terrace, guest bedroom (must be the booked property)
- [ ] Mood/real photos: coaching at golden hour, dinner table, drinks, tablescape
- [ ] Hero video: swap interim brand loop for the aerial golden-hour loop of the property (8–12 s, muted, < 5 MB, no cuts faster than 3 s). Re-export a poster frame.
- [ ] Daily schedule times (draft)
- [ ] `[CONFIRM]` massage — Included
- [ ] FAQ: exact town, skill-level wording, cancellation policy
- [ ] Instagram / TikTok handles (index footer, thank-you page)
- [ ] Privacy page: business legal name, email tool, hosting provider, contact email
- [ ] Canonical / og:url domain in index.html (`playawaymaison.com` assumed)

To add a real photo, put an `<img src alt loading="lazy" width height>` inside the matching `<figure class="ph">`; the placeholder caption hides automatically and the slow-zoom applies.

## Built to the brief

- Section order 01–09 as briefed; FAQ accordion with the first item open.
- CTA repeated in hero, after The days, after the FAQ, sticky on mobile — all scroll to the one form.
- Copy rules: no "luxurious" / "all-inclusive", no guest or spot counts, location "Greater Palm Springs", date "January 28, 2027".
- All text measured ≥ 4.5:1 contrast. Hero text sits on solid Palm.
- Respects reduced motion (no video, no animation) and Save-Data (no video).
