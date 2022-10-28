import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./reducers/user-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
import thunk from "redux-thunk";


const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(userReducer,applyMiddleware(sagaMiddleWare, thunk));
sagaMiddleWare.run(rootSaga);