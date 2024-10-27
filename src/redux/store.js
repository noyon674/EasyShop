import reducer from "./reducer/reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export {store, persistor}