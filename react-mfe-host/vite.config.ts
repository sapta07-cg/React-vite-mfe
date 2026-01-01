import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'host',
      remotes: {
        remoteApp: 'http://localhost:5003/assets/remoteEntry.js'
      },
      exposes: {
        "./Store": "./src/store/index.ts",
        "./counterSlice":"./src/store/counterSlice.ts"
      },
      shared: ['react', 'react-dom', 'react-redux','@reduxjs/toolkit']
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    cors: true
  }

})
