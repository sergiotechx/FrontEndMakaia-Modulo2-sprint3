import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import userReducer from "./PerfilReducer";
import comentReducer from "./comentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  comment: comentReducer,
});

export default rootReducer;
