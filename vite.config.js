import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Chemin relatif pour GitHub Pages
  build: {
    assetsDir: 'assets',  // Personnalisez le répertoire des assets (par défaut 'assets')
  },
})
