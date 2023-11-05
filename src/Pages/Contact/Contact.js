import React from 'react'
import Navbar from '../../Layout/Header/Navbar/Navbar'
import './Contact.css'
import { useSelector, useDispatch } from 'react-redux'
import { handleConact, setContactname, setContactproblem, setMessage, setcolor } from '../../Redux-toolkit/Reducer-actions/contact-reducer';
function Contact() {
    const dispatch = useDispatch();
    const name = useSelector((state)=>state.contact.Name);
    const problem = useSelector((state)=>state.contact.problem);
    const message = useSelector((state)=>state.contact.message);
    const color = useSelector((state)=>state.contact.color);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name === ''||problem === ''){
            dispatch(setMessage('Please Enter your name or Problem'))
        }else{
            dispatch(handleConact())
            dispatch(setcolor())
            dispatch(setMessage('sent succesfully'))
        }
    }
  return (
    <>
    <Navbar />
    <div className="form-container1">
        <form className='form' onSubmit={handleSubmit}>
            <p className="title">Contact us</p>
            <div className="input-group">
                <label>Enter your name</label>
                <input type="text" name="name" placeholder="Your name" onChange={(e)=>{dispatch(setContactname(e.target.value))}} />
            </div>
            <div className="input-group" >
                <label>Enter your problem</label>
                <input type="text" name="problem" id='te' placeholder="Your problem" onChange={(e)=>{dispatch(setContactproblem(e.target.value))}} />
            </div>
            <input type='submit' value='Send' className="sign" />
            {color ? <p style={{ color: 'green' }}>{message}</p> : <p style={{ color: 'red' }}>{message}</p>}
        </form>
    </div>
</>
  )
}

export default Contact
