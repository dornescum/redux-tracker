import {combineReducers} from "redux";
import activityReducer from "./activityReducer";

 const rootReducer = combineReducers({
     activities:  activityReducer,
 })

export default rootReducer;
