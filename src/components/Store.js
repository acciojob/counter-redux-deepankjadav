import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; // Import redux-thunk middleware
import Reducer from "./Reducer";

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
