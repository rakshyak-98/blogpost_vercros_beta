import {POST_FAILED, POST_LOADED, POST_SUCCESS} from "../actions/types";

const initialState = {
    post: null,
    loading: true,
    description: null
}

export default function (state = initialState, action)  {
    const { type, payload } = action;

    switch (type) {
        case POST_LOADED:
            return {
                description: payload.data.description
            }

        case POST_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case POST_FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}