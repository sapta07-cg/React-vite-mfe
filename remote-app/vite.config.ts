import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:'remoteApp',
      filename:'remoteEntry.js',
      remotes:{
        host:'http://localhost:5002/assets/remoteEntry.js'
      },
      exposes:{
        './App': './src/App',
        './remoteSlice':'./src/store/remoteSlice.ts'
      },
      shared:['react','react-dom','react-redux','@reduxjs/toolkit']
    })
  ],
  build:{
    target:'esnext',
    modulePreload:false,
    minify:false,
    cssCodeSplit:false,
  }
})
