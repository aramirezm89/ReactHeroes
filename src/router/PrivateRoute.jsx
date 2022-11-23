import React, { useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  const { pathname } = useLocation(); //obtiene el path de la url
  const lastPath = useMemo(() => pathname, [pathname]); //guarda el valor de la path y cambia cada vez que la path cambia
  localStorage.setItem("lastPath", lastPath); //guarda valor del path, esta sera utilizada una vez el usuario haya logeado exitosamente

  const { logged } = authState; //logged = booleando que viene desde el authState (authReducer)

  return logged ? children : <Navigate to="/login" />;
};
