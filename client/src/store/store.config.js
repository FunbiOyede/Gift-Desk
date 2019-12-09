import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// combine later
import Users from "./reducers/User";
import thunk from "redux-thunk";
import { Wishlists } from "./reducers/wishlists";
// import { Ideas } from "./reducers/Ideas";
const RootReducer = combineReducers({
  User: Users,
  Wish: Wishlists
});
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
export const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
