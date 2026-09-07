# eskazee — Personal portfolio

Full-stack portfolio site: React (Vite) frontend + Express/SQLite backend.

## Structure

```
portfolio-app/
  frontend/   React app (Home, About, Services, Contact)
  backend/    Express API (contact form -> SQLite)
```

## Run locally

Install everything:
```bash
npm run install:all
```

In one terminal, start the backend (port 4000):
```bash
npm run dev:backend
```

In another terminal, start the frontend (port 5173):
```bash
npm run dev:frontend
```

Visit `http://localhost:5173`. The Vite dev server proxies `/api/*` requests to the backend automatically (see `frontend/vite.config.js`).

## Contact form

Submissions POST to `/api/contact` and are stored in `backend/data/portfolio.db` (SQLite, created automatically on first run). View them anytime with:
```bash
curl http://localhost:4000/api/contact
```

## Customizing content

- Hero copy and intro: `frontend/src/pages/Home.jsx`
- About text: `frontend/src/pages/About.jsx`
- Services list: `frontend/src/pages/Services.jsx`
- Colors, fonts, spacing: `frontend/src/styles.css` (all defined as CSS variables at the top)
