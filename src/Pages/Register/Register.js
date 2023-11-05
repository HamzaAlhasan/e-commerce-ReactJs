import React from 'react'
import './Register.css'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {  handlesub, setEmail, setError, setName, setPass } from '../../Redux-toolkit/Reducer-actions/reducer-actions';
import {Link} from 'react-router-dom'
function Register() {
    const dispatch = useDispatch();
    const name = useSelector((state)=>state.register.name)
    const email = useSelector((state)=>state.register.email)
    const pass = useSelector((state)=>state.register.pass)
    const error = useSelector((state)=>state.register.error)
    const users ={name,email,pass};
    const navigate = useNavigate();
    const handleRedister = (e)=>{
        e.preventDefault();
        if(name !== '' && email !== '' && pass !== ''){
            if(pass.length > 5){
                localStorage.setItem('users',JSON.stringify(users))
                dispatch(handlesub())
                alert('created account succefully')
                console.log('sucesed')
                navigate('/login')
            }else{
                dispatch(setError())
            }
        }
    }
    return (
        <div className='one'>

            <div className="form-container">
                <p className="title">Sign up</p>
                <form className="form" onSubmit={handleRedister}>
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" required onChange={(e)=>{dispatch(setName(e.target.value))}}/>
                    </div>
                    <div className="input-group">
                        <label className='e'>Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>{dispatch(setEmail(e.target.value))}}/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required onChange={(e)=>{dispatch(setPass(e.target.value))}} />
                    </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>} 
                    <input type='submit' value='Sign up' className="sign" />
                </form>
                <p className="Login">Have an account?
                    <Link rel="noopener noreferrer" to="/login" className="Log">Log in</Link>
                </p>
            </div>


        </div>
    )
}

export default Register
