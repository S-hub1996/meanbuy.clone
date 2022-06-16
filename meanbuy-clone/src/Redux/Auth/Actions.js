import Axios from 'axios';
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAILURE = 'SIGNOUT_FAILURE';

const signInRequest = () => {
    return {
        type: SIGNIN_REQUEST,
    }
}

const signInSuccess = (payload) => {
    return {
        type: SIGNIN_SUCCESS,
        payload
    }
}

const signInFailure = (payload) => {
    return {
        type: SIGNIN_FAILURE,
        payload
    }
}
const signOutRequest = () => {
    return {
        type: SIGNOUT_REQUEST,
    }
}

const signOutSuccess = (payload) => {
    return {
        type: SIGNOUT_SUCCESS,
        payload
    }
}

const signOutFailure = (payload) => {
    return {
        type: SIGNOUT_FAILURE,
        payload
    }
}

const signIn = (payload) => (dispatch) => {
    dispatch(signInRequest());
    Axios.post('/api/login',  payload , { baseURL: 'https://reqres.in' }).then((r) => dispatch(signInSuccess(r.data))).catch((e)=>dispatch(signInFailure(e.data)));
}
const signOut = (payload) => (dispatch) => {
    dispatch(signOutRequest());
    Axios.get('/').then((r) => dispatch(signOutSuccess(r.data))).catch((e)=>dispatch(signOutFailure(e.data)));
}


export { signIn,signOut };