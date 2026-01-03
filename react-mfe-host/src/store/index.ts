import { configureStore,combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'




// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     remote: remoteReducer,
//   },
// })


// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch



// 1) Static reducers (known at build time)
const staticReducers = {
  counter: counterReducer,
};

// 2) Factory to build root reducer from static + async reducers
function createRootReducer(asyncReducers: Record<string, any> = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

// 3) Create store initially with only static reducers
export const store = configureStore({
  reducer: createRootReducer(),
});

// 4) Attach async reducer map to the store object
//    (TS users can make this nicer with declaration merging)
(store as any).asyncReducers = {};

// 5) Helper to inject a reducer at runtime
export function injectReducer(key: string, reducer: any) {
  const asyncReducers = (store as any).asyncReducers as Record<string, any>;

  if (asyncReducers[key]) {
    // already injected, no-op
    return;
  }

  asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer(asyncReducers));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
