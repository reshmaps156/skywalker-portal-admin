import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const token = sessionStorage.getItem("token")
  return (
   token?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default ProtectedRoutes