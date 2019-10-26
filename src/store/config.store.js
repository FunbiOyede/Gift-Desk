import { createStore } from "redux";
import username from "../reducers/username";
const configStore = createStore(username);

export default configStore;
