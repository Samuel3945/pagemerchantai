# MyMerchantAI — Marketing site

Public marketing website for **MyMerchantAI**, the browser-based POS for Latin American
businesses. This repo is intentionally **separate from the SaaS app** so the landing pages
are served as a plain static site from a CDN and never consume the application VPS resources.

- **App (the software):** `https://app.mymerchantai.com` — Next.js + Clerk, runs on the VPS.
- **Marketing (this repo):** static HTML/CSS/JS — deploy to any static CDN, zero build step.

The design comes from a Claude Design handoff (Shopify + HubSpot direction, evolved from the
product's teal + terracotta system). It was delivered as vanilla HTML/CSS/JS, so it ships
as-is — no framework, no build, fast LCP.

## Structure

```
index.html          Main landing page (hero, industry selector, sticky product tour,
                    AI differentiator, social proof, pricing, FAQ, final CTA, footer)
industria.html      Reusable vertical template — renders any sector from data
industria-data.js   The 6 verticals as data (farmacias, ferreterias, ropa, minimercados,
                    veterinarias, papelerias). Adding a vertical = adding an entry here.
brand.css           Marketing design system (tokens: color, type, spacing, components)
mockups.css         Clean product mini-mockups used across pages
site.js             Scroll animations, counters, FAQ, nav, drawer (scroll-position driven,
                    respects prefers-reduced-motion)
favicon.svg         Brand mark
404.html            Branded not-found page
robots.txt          Allows crawling, points to sitemap
sitemap.xml         Index + the 6 vertical URLs
```

## Login wiring (the SaaS hand-off)

All auth CTAs point at the real Clerk routes on the app domain:

| Button | Goes to |
|--------|---------|
| "Inicia sesión" | `https://app.mymerchantai.com/sign-in` |
| "Empieza gratis" / "Agenda una demo" | `https://app.mymerchantai.com/sign-up` |

If the app domain changes, it's a single find/replace across `index.html` + `industria.html`:

```sh
sd 'app\.mymerchantai\.com' 'NEW.DOMAIN' index.html industria.html
```

> The locale prefix is `as-needed` and `es` is the default, so `/sign-in` and `/sign-up`
> have **no** `/es/` prefix. That matches the live app routing.

## Design decisions baked in

The Claude Design export shipped an in-browser **Tweaks panel** (React + Babel-standalone
compiling JSX in the visitor's browser). That is a design-time tool — it was **removed for
production** because it kills LCP / Core Web Vitals. The variant you settled on is baked into
`brand.css` instead:

- Accent: `#C2410C` (warm terracotta) · Display font: **Bricolage Grotesque**
- Density: `regular` (`--section-y: 106px`) · Hero layout: `dividido` (split)
- Unused font families (Fraunces, Instrument Serif, Spectral) dropped from the Google Fonts
  request.

To re-explore variants, keep using the Claude Design project — don't re-add the panel here.

## Preview locally

```sh
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Any static host works (no build). Recommended, in order of least friction:

- **Cloudflare Pages / Netlify / Vercel** — connect the repo, framework = "None / static",
  output dir = repo root. Add the `mymerchantai.com` domain there.
- **GitHub Pages** — Settings → Pages → deploy from `main` / root.

Keep `app.mymerchantai.com` (the software) on the VPS. This site stays off it.

## Pending (next, together)

- **Real imagery** — testimonial photos (3), customer logo cloud (5), and an OG share image
  (`og-cover.png`, 1200×630). Striped labeled placeholders mark every slot today.
- **Clean vertical URLs** — `/farmacias` instead of `industria.html?sector=farmacias` (host
  rewrite rule; depends on which host we pick).
- **Demo / sign-up routing** — "Agenda una demo" currently shares `/sign-up`; decide if it
  should go to a calendar booking or a contact form.
- **Per-vertical SEO** — unique `<title>`/meta/OG per sector and FAQ structured data.
