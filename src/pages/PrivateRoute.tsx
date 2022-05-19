import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = (isLogged: boolean ) => {
  return (
  isLogged ? <Outlet />  : <Navigate to="/" />
    )
}

export default PrivateRoute
