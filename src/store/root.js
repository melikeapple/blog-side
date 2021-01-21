import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";
import * as app from "./ducks/app.duck";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(app.saga)]);
}
