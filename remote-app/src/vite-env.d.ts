

/// <reference types="vite/client" />

// Declare the exposed modules from the host MFE
declare module "host/Store" {
  import { store } from "host/Store";
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export { store };
}

declare module "host/counterSlice" {
  import { increment, decrement, reset } from "host/counterSlice";
  export { increment, decrement, reset };
}

