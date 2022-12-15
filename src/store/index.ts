import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers";
import watcherSagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

// const store = configureStore({gameReducer, middleware: applyMiddleware(sagaMiddleware)});

// const store = configureStore({
//     reducer: gameReducer,
//     middleware: (applyMiddleware) => applyMiddleware(sagaMiddleware),
//   })

sagaMiddleware.run(watcherSagas);
export default store;
