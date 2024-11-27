# Bookstack Reading List App

**This is a work in progress, not meant to be used in production (at least not yet).**

A Reading List web app built using Astro, React, TypeScript and Tailwind CSS with typography, and web forms.

The app should be deployed "in the cloud" (e.g. on Netlify Web Services).
TypeScript is currently only used in the front-end.

## live demo

TODO

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

```
npm start        # starts complete app in local development mode
```

starts a live preview server on

(http://localhost:8080)

## roadmap

- [x] start initial proof of concept
- [x] document ideas and roadmap
- [x] register domain
- [ ] release placeholder text with backlinks
- [ ] update requirements and prioritization
  - "serverless" backend and focus on the front-end
  - Tailwind without optional extras
  - Preact vs. React (again, keep it simple and stick to the mainstream)
  - Astro
  - Cypress
- [ ] release a minimal viable product (MVP)
- [ ] run audits and document results (Lighthouse, WAVE, WebPageTest, WebsiteCarbon, Green Web Check, Domain Authority)
- [ ] list and link the web app to increase incoming backlinks
- [ ] increase test coverage
  - unit tests
  - end-to-end tests
  - frontend tests, including Screenshots and accessibility audits
- [ ] localize app (German and English)
- [ ] add more content
