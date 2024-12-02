import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginStaticCopy from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*',
          dest: 'src/assets/images', // Copie dans le répertoire de build final
        },
      ],
    }),
  ],
  base: '/', // Chemin relatif pour GitHub Pages
  build: {
    assetsDir: 'assets',  // Personnalisez le répertoire des assets (par défaut 'assets')
  },
})
