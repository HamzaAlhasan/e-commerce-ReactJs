import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name : '',
    email : '',
    pass : '',
    error :''
}
export const registerSlice = createSlice({
    name : 'register' ,
    initialState,
    reducers :{
        setName : (state,action)=>{
            state.name =action.payload;
            
        },
        setEmail : (state,action)=>{
            state.email =action.payload;

        },
        setPass : (state,action)=>{
            state.pass = action.payload;
            
        },
        setError :(state)=>{
            state.error = 'Password less than 5 characters';
        }
        ,
        handlesub : (state)=>{
        localStorage.setItem('name',JSON.stringify(state.name))
        localStorage.setItem('email',JSON.stringify(state.email))
        localStorage.setItem('pass',JSON.stringify(state.pass))
        }
    }
})
export const {setEmail,setName,setPass,handlesub,setError} =registerSlice.actions;
export default registerSlice.reducer;


