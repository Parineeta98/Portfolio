# Portfolio Site (Scaffold)

A plain HTML/CSS/JS data-analyst portfolio, built to deploy straight to
GitHub Pages — no build step, no dependencies.

## Structure

```
index.html        page content — placeholders are marked with TODO comments
css/style.css     design tokens + styles (colors are CSS variables at the top)
js/script.js      mobile nav + the PROJECTS array that renders the project cards
assets/           put images, your resume PDF, etc. here
```

## What to fill in

Search for `TODO` in `index.html` and `js/script.js`:

- Your name (page title, logo, hero, footer)
- Your bio in the About section
- Your real email / LinkedIn / GitHub links in Contact
- A resume PDF at `assets/resume.pdf` (or remove the nav "Resume" link)
- Real project write-ups: edit the `PROJECTS` array in `js/script.js`.
  Each entry is one card — add a `demoUrl`/`codeUrl` and drop the
  `placeholder: true` flag once a project is ready to show.

## Preview locally

Just open `index.html` in a browser — everything runs client-side.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push these files to it (e.g. to the `main` branch).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick `main` and the `/ (root)` folder, then save.
4. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

To use a custom domain later, add a `CNAME` file at the repo root with your
domain name and configure the DNS records GitHub's Pages docs specify.
