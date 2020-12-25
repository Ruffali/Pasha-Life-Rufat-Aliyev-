import { combineReducers } from 'redux';
import userReducer from "./user/userReducer";
import singleUserReducer from "./singleUser/singleUserReducer";

const rootReducer = combineReducers({
    user: userReducer,
    singleUser: singleUserReducer,
})

export default rootReducer;