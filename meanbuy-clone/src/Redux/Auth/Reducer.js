import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './Actions';
import { SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from './Actions';

const initialState = {
    auth: false,
    token: '',
    error:false
}


const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SIGNIN_REQUEST:
            return {
                auth: false,
                token: '',
                error:false
            }
        case SIGNIN_SUCCESS:
            return {
                auth: true,
                token: payload,
                error:false

            }
        case SIGNIN_FAILURE:
            return {
                auth: false,
                token: '',
                error:payload


            }
        case SIGNOUT_REQUEST:
            return {
                auth: true,
                token: '',
                error:false
            }
        case SIGNOUT_SUCCESS:
            return {
                auth: false,
                token: payload,
                error:false

            }
        case SIGNOUT_FAILURE:
            return {
                auth: true,
                token: '',
                error:payload


            }
        default:
            return state;
    }
}

export { authReducer };