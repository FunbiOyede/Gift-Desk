import { createStore } from "redux";
// combine later
import username from "./reducers/username";
import { Wishlists } from "./reducers/wishlists";
export const Store = createStore(
  Wishlists,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
