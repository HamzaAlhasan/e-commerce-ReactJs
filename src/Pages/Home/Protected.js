import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
function Protected() {
    const auth = localStorage.getItem('isLoggedin');
return auth ? <Outlet /> : <Navigate to='/login'/>
}
export default Protected