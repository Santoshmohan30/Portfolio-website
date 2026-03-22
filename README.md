# Santosh Jena Portfolio

Professional GitHub Pages portfolio designed to position Sonny Jena across AI/ML engineering, backend/software engineering, computational neuroscience, and technical writing.

## Recommended folder structure

```text
portfolio-website/
├── index.html
├── README.md
├── .nojekyll
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── placeholders/
│   │       ├── project-mousebase.svg
│   │       ├── project-healthbot.svg
│   │       ├── project-idp.svg
│   │       ├── project-neuro.svg
│   │       ├── gallery-lab.svg
│   │       ├── gallery-whiteboard.svg
│   │       ├── gallery-setup.svg
│   │       ├── gallery-research.svg
│   │       ├── gallery-reading.svg
│   │       └── gallery-travel.svg
│   └── js/
│       └── script.js
├── blog/
│   └── index.html
├── resume.html
└── posts/
    ├── weekly-template.html
    ├── what-i-built-and-learned-this-week.html
    ├── from-naive-rag-to-modular-rag.html
    └── what-building-a-flask-backend-taught-me-about-system-design.html
```

## What is included

- Premium dark landing page with recruiter-focused narrative and strong hierarchy
- Tracks, about, skills, featured projects, case studies, engineering mindset, experience, gallery, and contact sections
- Separate blog page with tag filtering
- Public web resume page so the live site works without committing a PDF
- Reusable work update template so new posts can be created by duplicating one HTML file
- Static HTML/CSS/JS only, so it works directly with GitHub Pages
- Placeholder visuals and comments showing where to replace links, images, and text

## Run locally in VS Code

Because this is a static site, you can preview it with any simple local server.

### Option 1: VS Code Live Server

1. Open the folder in VS Code.
2. Install the `Live Server` extension if needed.
3. Right-click `index.html`.
4. Choose `Open with Live Server`.

### Option 2: Python built-in server

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deploy to GitHub Pages

### Simple GitHub Pages setup

1. Push this folder to your GitHub repository.
2. In GitHub, open `Settings` for the repository.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the branch you want to publish, usually `main`.
6. Select `/ (root)` as the folder.
7. Save and wait for GitHub Pages to publish.

### Notes

- The site is already structured for root deployment.
- `.nojekyll` is included so GitHub Pages serves the site without Jekyll processing.
- If you later publish from a project subpath, keep links relative the same way they are now.

## Customize first

Start with the high-signal items that recruiters will notice immediately:

1. Replace the placeholder email and LinkedIn URLs in `index.html`.
2. Swap the placeholder project/demo links with real repository or demo URLs.
3. Replace the SVG project and gallery placeholders with screenshots, architecture diagrams, and professional photos.
4. Review the case study language so it matches your exact project history and achievements.
5. Add more blog posts by duplicating `posts/weekly-template.html`.
6. Update `resume.html` if you want the public web resume to show more detail.

## Easy maintenance workflow

- Edit homepage content in `index.html`.
- Add or update styles in `assets/css/styles.css`.
- Update interactions or blog filters in `assets/js/script.js`.
- Add new blog posts in `posts/`.
- Add new blog cards on both `index.html` and `blog/index.html`.
- Replace placeholder visuals inside `assets/images/placeholders/` or point the HTML to real images.
- If you later want a downloadable PDF, host it separately and link it from `resume.html`.

## Ideal README structure for the repository

If you want a recruiter-friendly repo README, this is a good structure:

```text
# Portfolio Website

## Overview
Short explanation of what the site is for and how it positions you.

## Highlights
- AI/ML systems portfolio
- Backend engineering work
- Computational neuroscience pipeline work
- Technical blog and case studies

## Tech Stack
- HTML
- CSS
- JavaScript
- GitHub Pages

## Local Development
How to run locally.

## Deployment
How GitHub Pages is configured.

## Customization Guide
What files to edit for text, links, images, resume, and blog posts.

## Folder Structure
Tree view of the repository.
```

## Suggested next improvements

- Add a custom domain and favicon
- Add real project screenshots and architecture diagrams
- Add analytics such as Plausible or Google Analytics if desired
- Add a hosted PDF resume later if you want a downloadable file on top of the web resume
- Add a `404.html` later for a polished GitHub Pages experience
