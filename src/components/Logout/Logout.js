import React from 'react'
import {useNavigate} from 'react-router-dom'
function Logout() {
    const navigate = useNavigate();
    const hanadlelogout = ()=>{
        localStorage.removeItem('isLoggedin')
        localStorage.removeItem('carts');
        navigate('/login')
    }
    return (
        <div>
            < button style={{ color: 'black', width: '100px', height: '30px' }} onClick={hanadlelogout}>Log out</button>
        </div>
    )
}

export default Logout
