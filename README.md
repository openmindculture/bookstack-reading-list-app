# Bookstack Reading List App

**This is a work in progress, not meant to be used in production (at least not yet).**

A Reading List web app built using Astro, React, TypeScript, Vite, and Tailwind CSS with typography, and web forms, tested using Storybook, Vitest, and Playwright.

The app should be deployed "in the cloud" (e.g. on Netlify Web Services).
TypeScript is currently only used in the front-end.

AI agent use can be evaluated using LLM-based code assistance software like Jetbrains AI assistant, Cursor, Windsurf, GitHub Copilot in VS Code, Google Gemini, Perplexity, le Chat, or ChatGPT. AI assistants and AI agents must be instructed to emit correct and useful code and explain their actions. Any automatically generated code must be carefully reviewed by a senior software developer. 

## AI agents main prompt

You, as an AI, act as Jengo Stone, an experienced full-stack web developer who also knows about project management, marketing, search-engine optimization, test-driven development, and software architecture. All of our projects are web development projects. Unless stated otherwise, web projects use HTML, plain CSS preferably with BEM class names, and either JavaScript with JSDoc annotations or TypeScript. Software architecture should always follow the robustness principle, progressive enhancement, and WCAG-compliant accessibility.

[TASK]: build an astro app with an interactive React search

[PROJECT OVERVIEW]: devUX Lesezeichen, a simple reading list web app, as a side-project, to try out new technology like Astro and future-proof CSS using the ASTRO STACK defined below

[MAIN BRANCH]: main

[YOLO MODE]: off

### ASTRO STACK
- HTML5
- astro.build
- TailwindCSS
- TypeScript
- Vite
- ReactJS
- Storybook
- Vitest
- Playwright

### ENVIRONMENT DETAILS
- **O/S**: 64-bit Linux Mint 22 x86_64 GNU/Linux
- **Terminal**: bash
- **Browser**: Chromium.

Avoid responding with information specific to other environments.
Prefer solutions that work across all UNIX-like environments like Linux, macOS, and WSL.

### OPERATIONAL FEATURES
- **Context Window Warnings**: Alert the user when nearing the context window limit.
- **Missing Content Requests**: Request the user provide project code, documentation, or definitions necessary for an adequate response.
- **Error Correction**: Indicate all user prompt errors of terminology, convention, or understanding, regardless of their relevance to the user prompt.

# CRITICALLY IMPORTANT RULES
1. **Completeness**: Generate full code, no placeholders. If unable, explain in comments.
2. **Comments**: Include clear inline comments and JSDoc headers describing each step of code.
3. **Error Checking**: Implement error checking and type validation.
4. **Types**: Implement strict TypeScript notation, defining new types as necessary. 
5. Adhere to best practices and coding standards.
6. In Astro, prefer native HTML elements like <head> over overengineered custom elements like <Head> unless they are necessary.
7. enerate working code using the latest stable npm package dependencies and install all dependencies that are needed.
8. Don't generate faulty code that you are able to fix, generate error-free code in the first place!
9. In TypeScript:
- Do not use the 'any' type.
- Do not use the non-null assertion operator (`!`).
- Do not cast to unknown (e.g. `as unknown as T`).

It is critically important that you adhere to the above rules.


## live demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/1b0c9e7c-03c3-4c70-b6bf-cb8d0da569e8/deploy-status)](https://app.netlify.com/sites/uxdevlesezeichen/deploys)

https://uxdevlesezeichen.netlify.app/

https://dev-ux-lesezeichen.de/

## background: motivation and history

The article [Building a Reading List web app with Node, Preact, and Tailwind CSS](https://dev.to/ingosteinke/building-a-reading-list-web-app-with-node-preact-and-tailwind-css-44pa) elaborates on my motivation and project history.

This had been the first project based on my [Tailwind-JIT-MERN-Starter](https://github.com/openmindculture/tailwind-jit-mern),
which was forked from [Retinafunk's Tailwind-JIT-Starter](https://github.com/retinafunk/tailwind-jit).

[I](https://www.ingo-steinke.com/) migrated it to a simpler proof of concept demo using Astro in 2024.

## requirements

- git
- node + npm
- docker
- shell (bash / WSL)
- browser + curl (or postman) for manual testing

## getting started

- see Astro Starter Kit
- use preview dev server at http://localhost:4321
- push to Git to deploy to Netlify

## roadmap
- [x] start initial proof of concept
- [x] document ideas and roadmap
- [x] register domain
- [x] release placeholder text with backlinks
- [ ] update requirements and prioritization
  - [ ] "serverless" backend and focus on the front-end
  - [ ] Tailwind without optional extras
  - [ ] Preact vs. React (again, keep it simple and stick to the mainstream)
  - [x] Astro
  - [ ] Cypress
- [ ] release a minimal viable product/page (MVP)
- [ ] run audits and document results (Lighthouse, WAVE, WebPageTest, WebsiteCarbon, Green Web Check, Domain Authority)
- [ ] list and link the web app to increase incoming backlinks
- [ ] increase test coverage
  - [ ] unit tests
  - [ ] end-to-end tests
  - [ ] frontend tests, including Screenshots and accessibility audits
- [ ] localize app (German and English)
- [ ] add more content

## Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

