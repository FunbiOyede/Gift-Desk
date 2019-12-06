import { createStore } from "redux";
// combine later
// import username from "./reducers/username";
// import { Wishlists } from "./reducers/wishlists";
import { Ideas } from "./reducers/Ideas";
export const Store = createStore(
  Ideas,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
