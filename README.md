# Bookstack Reading List App

**This is a work in progress, not meant to be used in production (at least not yet).**

A Reading List web app built using Astro, React, TypeScript and Tailwind CSS with typography, and web forms.

The app should be deployed "in the cloud" (e.g. on Netlify Web Services).
TypeScript is currently only used in the front-end.

## live demo

https://uxdevlesezeichen.netlify.app/

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

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
