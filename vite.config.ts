import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import solidPlugin from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss()],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
})
