# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Fullstack book-catalog app ("Livros"). A Create React App frontend and an Express REST API live in the same repository and share one `package.json`. Code, filenames, and comments are in **Portuguese** (`rotas`=routes, `controladores`=controllers, `servicos`=services, `livro(s)`=book(s), `favorito(s)`=favorite(s)) — match this convention when adding code.

## Commands

- `npm start` — run the React dev server (http://localhost:3000)
- `npm run server` — run the Express API (http://localhost:8000)
- `npm test` — run the test runner (react-scripts/Jest) in interactive watch mode
- `npm test -- --watchAll=false <path>` — run a single test file once, non-interactively
- `npm run build` — production build of the frontend into `build/`
- `docker compose up --build` — run frontend + backend together as two containers

Both the frontend and the backend must run for the app to work end-to-end; there is no combined start script.

## Architecture

### Backend (Express, `app.js` + `rotas/`, `controladores/`, `servicos/`)
Three-layer structure per resource, wired in `app.js` which mounts routers at `/livros` and `/favoritos`:
- **`rotas/`** — Express routers that map HTTP verbs to controller functions.
- **`controladores/`** — request/response handling, status codes, try/catch error responses. No business logic.
- **`servicos/`** — data access. **The "database" is flat JSON files** (`livros.json`, `favoritos.json`) read/written synchronously with `fs`. There is no DB. Adding a favorite looks up the book in `livros.json` by `id` and appends it to `favoritos.json`.

CORS is open (`origin: '*'`). The API listens on port 8000 (hardcoded).

### Frontend (`src/`)
- **`src/index.js`** — app entry: `BrowserRouter` routes, global styles (styled-components), mounts `<Header>`. Routes `/categorias` and `/estante` are placeholders.
- **`src/rotas/`** — page components (`Home`, `Favoritos`).
- **`src/componentes/`** — UI components. Some carry local mock data files (e.g. `dadosPesquisa.js`, `dadosUltimosLancamentos.js`) used instead of the API.
- **`src/servicos/`** — axios clients (`livros.js`, `favoritos.js`) that call the backend. **Base URLs are hardcoded to `http://localhost:8000`** — update these if the API host/port changes.
- Styling is via **styled-components** throughout.

### Frontend ↔ Backend contract
`src/servicos/*` axios calls map directly onto the `rotas/*` endpoints: `GET/POST /livros`, `DELETE /livros/:id`, `GET /favoritos`, `POST /favoritos/:id`, `DELETE /favoritos/:id`.

## Docker

`Dockerfile` builds one Node 20 image; `docker-compose.yml` runs it twice with different commands (`npm start` for frontend, `npm run server` for backend). The frontend service sets `HOST: 0.0.0.0` so CRA is reachable from outside the container.

## Conventions

- New backend resources should follow the rotas → controladores → servicos layering.
- IDs in the JSON stores are numeric; the delete controller validates `Number(id)` before acting.
- Copilot instructions (`.github/copilot-instructions.md`) ask to execute task descriptions directly without asking for confirmation, assuming the most likely intent, and only pausing when essential info is missing or a change is clearly destructive.
