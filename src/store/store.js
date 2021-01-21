import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { rootReducer, rootSaga } from "./root";

export const history = createBrowserHistory();
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  {},
  compose(
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware, thunk)
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;
