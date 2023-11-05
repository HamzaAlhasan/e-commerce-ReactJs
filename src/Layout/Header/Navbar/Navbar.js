import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
import Logout from '../../../components/Logout/Logout';
import { Link } from 'react-router-dom'
function Navbar() {
    const cartitems = useSelector((state) => state.cart.items);
    const name = JSON.parse(localStorage.getItem('name'))
    const loggedin = localStorage.getItem('isLoggedin');
    const showname = () => {
        if (loggedin) {
            return <h4 style={{ color: 'white' }}>Welcome {name}</h4>
        } else {
            return;
        }
    }
    return (
        <div>
            <div className="header">
                <nav className="nav">
                    <div className="flex">
                        <Link to="/home" className="logo">E-com</Link>
                    </div>
                    <div className="menu">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/cart">cart-{cartitems.length}</Link>
                    </div>
                    <div className="search" style={{ paddingLeft: '10px' }}>
                        <div className="container-input">
                            <input type="text" placeholder="Search" name="text" className="input1" />
                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" ></path>
                            </svg>
                        </div>
                    </div>
                    {showname()}
                    {<Logout />}
                </nav>
            </div>
        </div>
    )
}

export default Navbar
