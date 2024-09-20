import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Redux Persist Configuration
// This setup enables state persistence across app reloads
// It uses local storage by default, but can be configured for different storage engines
const persistConfig = {
  key: "root", // Root key for the persisted state
  storage, // Storage engine (default is local storage)
  // You can add more configuration options here, such as:
  // whitelist: ['counter'], // Only persist the 'counter' slice
  // blacklist: ['someReducer'], // Don't persist 'someReducer'
};

// Create a persisted reducer
// This wraps our existing reducer with persistence capabilities
const persistedReducer = persistReducer(persistConfig, counterReducer);

// Create the Redux store with persistence
export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persisted store
// This is used to persist and rehydrate the store
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
