import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import weatherSlice from "./weatherSlice";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const reducer = {
    weather: weatherSlice,
  };
  const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== "production" ||
      process.env.PUBLIC_URL.length > 0,
  });

  return store;
}
