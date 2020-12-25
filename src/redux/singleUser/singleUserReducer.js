import {
    FETCH_SINGLE_USER_REQUEST
} from "./singleUserTypes";

const initialState = {
    singleUser: [],
}

const singleUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_USER_REQUEST:
            return {
                ...state,
                singleUser: action.payload
            }
        default: return state
    }
}

export default singleUserReducer;