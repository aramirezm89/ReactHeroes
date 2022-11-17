
import { useReducer } from 'react'

import { AuthContext, authReducer } from '.'
import { types } from '../types/types'


const initialState = {
    logged:false
}

const init = () =>{
    const user = JSON.parse(localStorage.getItem("user"));

    return {
        logged:!!user,
        user:user
    }
}
export const AuthProvider = ({children}) => {
     

 const [authState,dispatch]  = useReducer(authReducer,initialState,init)

 const login = (usuario) =>{
  
    const action = {
        type: types.login,
        payload:usuario
    }
 

    localStorage.setItem('user',JSON.stringify(usuario))
    dispatch(action);

    
 }

 const logout = () =>{
    localStorage.removeItem('user');
    const action = {
        type:types.logout

    }
    dispatch(action)
 }
  return (
      <AuthContext.Provider value={{login:login,authState,logout:logout}}>
        {children}
     </AuthContext.Provider>
  )
}
