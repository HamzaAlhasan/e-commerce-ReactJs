import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Name : '',
    problem : '' ,
    message : '',
    color : false
}
export const contactSlice = createSlice({
    name : 'contact',
    initialState,
    reducers : {
        setContactname : (state,action)=>{
            state.Name = action.payload;
        },
        setContactproblem : (state,action)=>{
            state.problem = action.payload;
        },
        setMessage : (state,action)=>{
            state.message = action.payload;
        },
        setcolor : (state)=>{
            state.color = true;
        }
        ,
        handleConact : (state)=>{
            localStorage.setItem('Your Name',JSON.stringify(state.Name));
            localStorage.setItem('Your Problem',JSON.stringify(state.problem));

        }
    }
})
export const {setContactname,setContactproblem,setMessage,handleConact,setcolor} = contactSlice.actions;
export default contactSlice.reducer;