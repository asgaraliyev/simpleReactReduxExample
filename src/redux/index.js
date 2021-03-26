import { createStore } from "redux";
import addCommentReducer from "./reducers/addCommentReducer";
const store = createStore(
  addCommentReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
