import axios from "axios";
import {POST_FAILED, POST_LOADED, POST_SUCCESS, REGISTER_FAIL, SET_ALERT} from "./types";
import {setAlert} from "./alert";


export const getBlogById = (id) => async (dispatch, getState) => {

    try{
        const response = await axios.get(/api\/blog\/(.+)$/, {params: {id: id}});
        dispatch({
            type: POST_LOADED
        })
    }catch (error){
        dispatch({
            type: POST_FAILED,
        })
    }
}

export const postBlog = (value) => async (dispatch) => {
    const description = value;

    const config = {
        header:{
            'Content-type': 'application/json',
        },
    }

    const body = JSON.stringify({description});
    try{
        const res = await axios.post('/api/blog', body, config);
        dispatch({ type: POST_SUCCESS, payload: res.data });
    }catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: POST_FAILED,
        })
    }
}