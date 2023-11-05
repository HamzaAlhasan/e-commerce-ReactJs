import {configureStore} from '@reduxjs/toolkit'
import  registerReducer  from '../Reducer-actions/reducer-actions'
import loginReducer from '../Reducer-actions/login-reducer'
import productReducer from '../Reducer-actions/home-reducer'
import contactReducer from '../Reducer-actions/contact-reducer'
import cartReducer from '../Reducer-actions/cart-reducer'
export const store = configureStore({
    reducer: {
        register : registerReducer,
        Login : loginReducer,
        home : productReducer,
        contact : contactReducer,
        cart : cartReducer
    }
})