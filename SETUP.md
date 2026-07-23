# Getting this live on GitHub Pages

## What's in here
- `src/` — every page as a template (`.njk`), plus one shared `_includes/nav.njk` and `_includes/footer.njk`
- `.github/workflows/deploy.yml` — builds the site and publishes it automatically every time you push to `main`
- `src/CNAME` — tells GitHub Pages this repo should answer to `worklifenavigator.com`

You never touch `_site/` — that's the built output, generated fresh on every push.

## One-time setup

1. **Create the repo.** On github.com, create a new repository (public, since GitHub Pages on a free plan needs that). Name it whatever you like — the domain, not the repo name, is what visitors see.

2. **Push this folder to it.** From inside this folder:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages via Actions.** In the repo on github.com: Settings → Pages → under "Build and deployment," set Source to "GitHub Actions." (Not "Deploy from a branch" — that's the old way and won't use the workflow file that's already set up.)

4. **Point your domain at GitHub.** At your domain registrar, add these DNS records (from your project notes, these are GitHub's four IPs):
   - A records for the apex domain (`worklifenavigator.com`) → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - The `CNAME` file already in this repo tells GitHub Pages which domain to serve — you don't need to add anything for that part beyond the DNS records above.

5. **Wait for DNS to propagate**, then check the box for "Enforce HTTPS" in the same Pages settings once GitHub shows the certificate as ready.

## Day-to-day editing from here on

- Edit the relevant `.njk` file in `src/` — same as editing HTML, just with a front-matter block (the `---` section) at the top for title/description/CTA button.
- To change the nav — wording, links, which pages sit in which dropdown — edit `src/_includes/nav.njk`. This one file controls the nav on every page.
- Push to `main`. GitHub Actions rebuilds and republishes automatically — usually live within a minute or two. You don't run any build command yourself.

## Still outstanding (from the project notes, unchanged by this restructure)
- Real Calendly links and your Formspree form ID still need dropping into the contact/booking sections
- Keynote/Podcast/Point of View sections still share the main site's visual design — the folder structure now makes it possible to give them a different look later, but that hasn't been done here
- `/resources` and `/videos` weren't in the files you sent this round, so they're not part of this build yet
- Sitemap and robots.txt need to be rebuilt for the new single-domain structure — the old ones were split per subdomain, which no longer matches the site
