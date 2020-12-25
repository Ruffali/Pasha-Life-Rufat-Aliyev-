import {
    FETCH_USERS_SUCCESS,
} from "./userTypes";

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
