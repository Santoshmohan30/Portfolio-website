# Santosh Jena Portfolio

This repository contains my portfolio website.

I built it to present myself clearly across:
- AI/ML engineering
- backend and software engineering
- computational pipelines
- technical writing through project notes and work updates

The goal of this site is simple: when a recruiter or engineer opens it, I want them to understand what I build, how I think, and the kinds of hard technical problems I like working on.

## What’s on the site

- A homepage with my background, skills, featured projects, case studies, engineering mindset, experience, and contact information
- A blog page with work updates and technical writing
- A public web resume page
- Project visuals and a gallery section for personality without taking focus away from the technical work

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Main Files

```text
portfolio-website/
├── index.html
├── README.md
├── .nojekyll
├── assets/
│   ├── css/styles.css
│   ├── js/script.js
│   ├── js/blog-data.js
│   └── images/placeholders/
├── blog/index.html
├── resume.html
└── posts/
```

## What I Highlight Here

### AI / ML Systems
I’m interested in building systems that combine models, retrieval, validation, and backend delivery in a way that is actually usable and reliable.

### Backend Engineering
I like designing applications and pipelines where structure matters: schemas, APIs, maintainability, debugging, and long-term scalability.

### Computational Pipelines
I work on scientific and data-heavy workflows where correctness, reproducibility, and quality control matter as much as raw output.

### Technical Thinking
I use project writeups and work updates to show how I reason through messy systems, tradeoffs, and failure points.

## Featured Projects

- **MouseBase / Mice Manager**
  Flask-based lab workflow platform for tracking breeding, procedures, scheduling, and colony records.

- **HealthBot**
  Agentic RAG backend for medical knowledge retrieval with structured validation and response flow.

- **Intelligent Document Processor**
  OCR and document-processing backend that converts PDFs and images into structured JSON.

- **Computational Pipeline**
  Research-oriented pipeline for imaging, signal extraction, normalization, synchronization, and quality control.

## Running It Locally

I keep the site static so it stays easy to maintain and deploy.

### VS Code
Open the project folder and use Live Server.

### Python
From the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deployment

This site is deployed with GitHub Pages from the `main` branch.

Because it is a static site, updates are straightforward:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Updating Content

- Edit [index.html](/Users/sonny03/Documents/portfolio-website/index.html) for homepage content
- Edit [blog/index.html](/Users/sonny03/Documents/portfolio-website/blog/index.html) for the blog archive page
- Edit [resume.html](/Users/sonny03/Documents/portfolio-website/resume.html) for the public web resume
- Edit [assets/css/styles.css](/Users/sonny03/Documents/portfolio-website/assets/css/styles.css) for styling
- Edit [assets/js/blog-data.js](/Users/sonny03/Documents/portfolio-website/assets/js/blog-data.js) to add or update blog cards
- Add blog posts in [posts](/Users/sonny03/Documents/portfolio-website/posts)

## What I Still Plan To Improve

- Add more project screenshots and architecture diagrams
- Add more work updates and technical writing
- Keep refining the case studies so they stay close to the real engineering story behind each project

## Contact

- Email: [sjena@buffalo.edu](mailto:sjena@buffalo.edu)
- GitHub: [Santoshmohan30](https://github.com/Santoshmohan30)
- LinkedIn: [Santosh Mohan](https://www.linkedin.com/in/santosh-mohan-a65112299/)
