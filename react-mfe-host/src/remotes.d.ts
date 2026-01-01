/// <reference types="vite/client" />

declare module 'remoteApp/App' {
  import { ComponentType } from 'react'

  const App: ComponentType
  export default App
}

declare module 'remoteApp/remoteSlice' {
  import { addTen } from 'remoteApp/remoteSlice'
  export { addTen }
}
