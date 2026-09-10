import { defineConfig } from 'vite';

// BASE_PATH setzt der GitHub-Actions-Workflow auf "/<repo-name>/", weil die
// Seite auf GitHub Pages unter diesem Unterpfad liegt. Lokal laeuft alles unter "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  server: { port: 5183 },
});
