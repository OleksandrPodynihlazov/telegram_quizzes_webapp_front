# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## For setup on your machine

`git clone *project link*`

`npm install`

Check if these dependencies are present (just run the commands):

1. `npm install react react-dom`
2. `npm install -D eslint prettier`
3. `npm install -D eslint-plugin-jsx-a11y`

.env setup:
`cp .env.example .env`

And in newly created .env file change the `VITE_API_URL=https://api.example.com` to desired API URL.

### Run the project

`npm run dev`

**IMPORTANT**: Before every commit run these commands first to ensure readability of the code and check for possible warnings

1. `npm run lint`
2. `npm run format`

### List of all available scripts

`npm run dev`: Start development server.
`npm run build`: Build for production.
`npm run preview`: Preview production build.
`npm run lint`: Lint the codebase.
`npm run format`: Format the codebase.
