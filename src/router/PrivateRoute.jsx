import React, { useContext, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/context'

export const PrivateRoute = ({children}) => {

    const {authState} = useContext(AuthContext)
    
    const {pathname}  = useLocation()
    const lastPath = useMemo(() => pathname,[pathname]);
    localStorage.setItem('lastPath',lastPath);
  
    const {logged}  = authState;
    return (logged) ? children : <Navigate to="/login" />

}
