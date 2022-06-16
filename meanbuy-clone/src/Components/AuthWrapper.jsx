import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
const AuthWrapper = ({children}) => {
//    const navigate= useNavigate()
    const authStatus= useSelector(store=>store.authReducer.auth)

        if(authStatus){
          return  <Navigate to='/login' state='/cart' replace={true} />
         }

    return children;

   

}

export default AuthWrapper