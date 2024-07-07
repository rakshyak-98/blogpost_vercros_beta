// import uuidv4 from 'uuid/v4'
import {REMOVE_ALERT, SET_ALERT} from "./types";
export const setAlert = (msg,alertType, timeout = 5000) => (dispatch) =>{
    const id = 4;
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id},
    });

    setTimeout(
        ()=>
            dispatch({
                type: REMOVE_ALERT,
                payload: id,
                id,
            }),
        timeout
    );
};

export default alert;