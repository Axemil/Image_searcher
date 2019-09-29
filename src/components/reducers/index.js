import { combineReducers } from "redux";
import imgReducer from "./imgReducer";

export default combineReducers({
  images: imgReducer
});
