import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

// // dynamic import from remote
// const remoteReducer = await import('remoteApp/remoteSlice')

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch