import { myAppReducer } from "./reducers/index";
import { createStore } from "redux";
const store = createStore(myAppReducer);
export default store;
