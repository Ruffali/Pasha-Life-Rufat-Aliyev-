import {
    FETCH_SINGLE_USER_REQUEST
} from "./singleUserTypes";

export const fetchSingleUser = (user) => {
    return (dispatch) => {
        dispatch({ type: FETCH_SINGLE_USER_REQUEST, payload: user });
    }
}