import {createSlice} from '@reduxjs/toolkit';
const storedCart = JSON.parse(localStorage.getItem('carts')) || [];
const initialState = {
    items : storedCart
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addCart : (state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem('carts' ,JSON.stringify(state.items))
        },
        removeCart : (state,action)=>{
            state.items =state.items.filter((item) => {
            return item.id !== action.payload.id;
            });
            localStorage.setItem('carts',JSON.stringify(state.items))
        },
        clearCart : (state)=>{
            state.items = []
            localStorage.removeItem('carts');
        }
    }
})
export const {addCart,removeCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;