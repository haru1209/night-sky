# Night Sky

Night Sky is a small Vite-powered web experience that turns your input into a starry scene. Type a number, press **Enter**, and watch the sky fill with stars followed by a short romantic line. Use **Retry** to clear the sky and start again.

## Features

- Animated star creation based on the number you enter.
- Lightweight, dependency-free frontend (just HTML, CSS, and JavaScript).
- Quick reset to try different star counts.

## Getting Started

### Prerequisites

- Node.js 18+ (or any version compatible with Vite 7).

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL printed in your terminal.

## Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the development server.         |
| `npm run build`   | Create a production build.            |
| `npm run preview` | Preview the production build locally. |

## Project Structure

```text
/
├── index.html
├── src/
│   ├── main.js
│   ├── style.css
│   └── reset.css
└── package.json
```

## Usage Tips

- Enter a positive integer to control the number of stars.
- Click **Retry** to reset and try another number.
