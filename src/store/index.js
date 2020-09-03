import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";

export default createStore(rootReducer, applyMiddleware(thunk));
