import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
 import AuthSlice from "./Auth/AuthSlice"; 
import api from "../Services/Api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
 const rootPersistConfig={
    key:'root',
    storage,
    whitelist:['AuthSlice']
 }
 const reducers=combineReducers({
    AuthSlice,
    [api.reducerPath]: api.reducer,
 })
 const persisteReducer=persistReducer(rootPersistConfig,reducers)
 const store=configureStore({
    reducer:persisteReducer,
    middleware: (getDefaultMiddleware) => {
      const middlewares = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(api.middleware);
      return middlewares;
    },
 })
 setupListeners(store.dispatch);
 const persistor=persistStore(store)
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
 export {store,persistor}