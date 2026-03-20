---
id: Docusaurus Portfolio
title: Docusaurus Portfolio
sidebar_position: 1
slug: /projects/docusaurus-portfolio
---

# DevSecOps Portfolio

This repository contains my *DevSecOps portfolio website** built with **Docusaurus and React*.

The project combines a modern *custom-built portfolio interface** with structured **technical documentation*, showcasing my work in infrastructure, security, automation, and containerization.

---

## Live Overview

This portfolio demonstrates:

- Practical DevSecOps projects
- Infrastructure and security implementations
- CI/CD pipelines with GitHub Actions
- Containerized applications (Docker-based)
- Clean and responsive UI/UX

---

## Table of Contents

- [Repository Description](#repository-description)
- [Portfolio Features](#portfolio-features)
- [Architecture](#architecture)
- [Projects](#projects)
- [Quickstart](#quickstart)
- [Deployment](#deployment)
- [GitHub Actions Deployment](#github-actions-deployment)
- [Repository Structure](#repository-structure)
- [Adding New Projects](#adding-new-projects)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Repository Description

This project serves as a *central hub for showcasing DevSecOps projects*.
Each project includes:
- A short overview in the portfolio UI
- Detailed technical documentation written in Markdown.

The site is statically generated and deployed automatically using *GitHub Actions*.

---

## Portfolio Features

- Custom *React-based portfolio interface*
- Built with *Docusaurus static site generator*
- Fully *responsive architecture (mobile & desktop separated)*
- Clean and consistent UI/UX design
- Smooth scrolling and interactive elements
- Static build for high performance
- Automated deployment pipeline

---

## Architecture

This project uses a *component-based responsive architecture*:

- Separate *mobile and desktop components*
- Wrapper-based rendering (`index.tsx`)
- CSS Modules for scoped styling
- No media-query conflicts between layouts

```plaintext
Component/
 ├── desktop.tsx
 ├── mobile.tsx
 ├── component.module.css
 ├── component.mobile.module.css
 └── index.tsx (responsive wrapper)
```

## Projects

The portfolio currently includes the following projects:

- V-Server Setup
  Secure Linux server configuration including SSH hardening, firewall setup, and monitoring.

- Baby Tools
  Dockerized Django-based web application for managing a small online shop.

- Truck Signs API
  REST API built with Django and Django REST Framework for managing customizable truck sign products.

- Juice Shop
  Documentation of completed OWASP Juice Shop vulnerabilities and security concepts.

- Minecraft Docker Server
  Custom Docker container for running a Minecraft Java Edition server without prebuilt images.

- WordPress Docker Deployment
  WordPress hosting environment with Docker and MySQL.

- Conduit Container
  Containerized RealWorld Conduit application using Django REST backend and Angular frontend.

- Conduit Deployment
  CI/CD pipeline using GitHub Actions for automated deployment of a containerized application.

- Docusaurus Portfolio
  This portfolio site built using Docusaurus.

- Personal CV Website
  Responsive personal CV built with HTML and CSS.

Each project includes detailed documentation inside the *docs/projects* directory.

---

## Quickstart

### Prerequisites

Make sure the following software is installed:

- Node.js (version 18 or later recommended)
- npm (comes with Node.js)
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/behrouzRajaei/docusaurus-portfolio-template.git
cd docusaurus-portfolio-template
```
Install dependencies:
```bash
npm install
```
### Local Development

Start the development server:
```bash
npm start
```
The site will be available at:
```
http://localhost:3000
```
Changes in the source files will automatically reload the page.

### Build

Generate the static production build:
```bash
npm run build
```
The static website will be generated inside:
```
build/
```
### Preview Production Build

You can preview the production build locally with:
```bash
npm run serve
```

---

## Deployment

### Deploy to GitHub Pages

If GitHub Pages is configured for the repository, deploy with:
```bash
npm run deploy
```
This command builds the site and pushes the static content to the gh-pages branch.

### Deploy using NGINX

You can deploy the generated static site behind an NGINX server.

Example:
```bash
npm run build
```
Then copy the build directory to your web server:
```bash
cp -r build/* /var/www/html/
```

---


## GitHub Actions Deployment

This project is automatically deployed using GitHub Actions.

Every push to the main branch triggers a workflow that:

- Builds the Docusaurus site

- Generates static files

- Deploys them to the gh-pages branch

- Publishes the site via GitHub Pages

### Workflow Overview

```
Push → GitHub Actions → Build → Deploy → Live Website
```

### Live Website

After deployment, the portfolio is available at:

```
https://behrouzRajaei.github.io/docusaurus-portfolio-template/
```

### Notes

- main → source code

- gh-pages → deployed static site

- Deployment is fully automated

### Trigger Deployment

```
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## Repository Structure

blog/                 optional blog content
docs/                 project documentation
docs/projects/        documentation for each portfolio project
src/                  React components for portfolio layout
static/               images and static assets
build/                generated static website

---

## Adding New Projects

1. Create a new folder:

```
docs/projects/project's name
```

2. Add the following files:

```
README.md
CHECKLIST.md
```

3. Update the project list inside:

```
src/components/portfolio/Projects/desctop.tsx
```

---

## Technologies Used

- Docusaurus

- React

- TypeScript

- CSS Modules

- Markdown Documentation

---

## License

This project is provided for portfolio and educational purposes.

---

See the project checklist:

[Project Checklist](./CHECKLIST.md)
