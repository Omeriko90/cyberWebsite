import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import user from "./reducers/user";
import posts from "./reducers/posts";
import apiMiddleware from "./middleware/api";

export const history = createBrowserHistory();
export default function configureStore(initialState) {
  const reducers = {
    posts,
    user,
  };

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  const middleware = [apiMiddleware, routerMiddleware(history)].filter(Boolean);

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
