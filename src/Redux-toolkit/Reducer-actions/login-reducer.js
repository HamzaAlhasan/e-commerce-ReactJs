import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email : '',
    pass : '',
    error : ''
}
export const loginSlice = createSlice({
    name : 'Login',
    initialState,
    reducers :{
        setEmail1 : (state,action)=>{
            state.email = action.payload;
        },
        setPass1 :(state,action)=>{
            state.pass = action.payload
        },handleLog : ()=>{
            localStorage.setItem('isLoggedin',true)
        },
        setError1 : (state)=>{
            state.error = 'Invaild Email or Password';
        }
    }
})
export const {setEmail1,setPass1,handleLog,setError1} = loginSlice.actions;
export default loginSlice.reducer;