# Bookstack Reading List App

**This is a work in progress, not meant to be used in production (at least not yet).**

A Reading List web app built using Preact, TypeScript and Tailwind CSS with typography, forms, tailwind JIT compilation, and a simple back-end based on Node, Express, and MongoDB.

This is the first project based on my [Tailwind-JIT-MERN-Starter](https://github.com/openmindculture/tailwind-jit-mern),
which was forked from [Retinafunk's Tailwind-JIT-Starter](https://github.com/retinafunk/tailwind-jit).

The app should be deployed "in the cloud" (e.g. on Amazon Web Services).
TypeScript is currently only used in the front-end.

## live demo

TODO

## background: motivation and history

The article [Building a Reading List web app with Node, Preact, and Tailwind CSS](https://dev.to/ingosteinke/building-a-reading-list-web-app-with-node-preact-and-tailwind-css-44pa) elaborates on my motivation and project history.

## requirements

- git
- node + yarn (or npm)
- docker + docker-compose
- shell (bash / WSL)
- browser + curl (or postman) for manual testing

## getting started

```
yarn start        # starts complete app in local development mode
```

starts a live preview server on

(http://localhost:8080)

## roadmap

- [x] start initial proof of concept
- [x] document ideas and roadmap
- [ ] register domain
- [ ] release placeholder text with backlinks
- [ ] update requirements and prioritization
  - "serverless" backend and focus on the front-end
  - Tailwind without optional extras
  - Pract vs. React (again, keep it simple and stick to the mainstream)
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
