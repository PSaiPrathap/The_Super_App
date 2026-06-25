# The Super App

Super App is a single-page React application where users sign up, choose entertainment categories, and explore recommended movies along with quick widgets (Notes, News, Weather, Timer).

Built with:
- React
- React Router
- Zustand (state management)
- Axios (dependency included)

Link for live project:
- https://the-super-app-sai-prathap.vercel.app/

---

## Features

- **Register**: basic signup form with validation + consent checkbox.
- **Categories**: pick up to your favorite categories (minimum required: **3**).
- **Dashboard**: profile + widgets
  - Notes (saved to `localStorage`)
  - News (auto-rotating carousel)
  - Weather (static UI demo)
  - Timer (start/pause + adjust hours/minutes/seconds)
  - Browse button → Movies
- **Movies**: shows a grid of movie images filtered by selected categories.

---

## Tech Stack

- **Frontend**: React (Create React App)
- **Routing**: `react-router-dom`
- **State**: `zustand`

---

## Project Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally

```bash
npm start
```

Open:
- http://localhost:3000

### 3) Run tests

```bash
npm test
```

### 4) Build for production

```bash
npm run build
```

---

## Routes

- `/` → **Register**
- `/categories` → **Categories**
- `/dashboard` → **Dashboard**
- `/movies` → **Movies**

---

## Notes Storage

The **Notes** widget persists content in the browser using:
- `localStorage` key: `super_app_notes`

---

## Folder Structure (high level)

- `src/pages/`
  - `Register/`
  - `Categories/`
  - `Dashboard/`
  - `Movies/`
- `src/components/`
  - `NewsWidget.js`
  - `NotesWidget.js`
  - `TimerWidget.js`
  - `WeatherWidget.js`
- `src/store/useStore.js`

---
