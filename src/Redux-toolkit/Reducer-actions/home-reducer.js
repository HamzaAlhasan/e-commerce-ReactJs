import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    products : [],
    categories : [],
    det : []
}
export const getproducts = createAsyncThunk('home/getproducts',async (_,thunkAPI)=>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data
})
export const getcategories = createAsyncThunk('home/getcategories',async(_,thunkAPI)=>{
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    return data;
})
export const getsinglecatgorey = createAsyncThunk('home/getsinglecatgorey',async(catName,thunkAPI)=>{
    const res = await fetch(`https://fakestoreapi.com/products/category/${catName}`);
    const data = await res.json();
    return data;
})
export const getDet = createAsyncThunk('home/Details',async(productId,thunkAPI)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    return data;
})
export const productSlice = createSlice({
    name : 'home',
    initialState,
    reducers :
    {
    },
    extraReducers : (bulider) =>{
        bulider.addCase(getproducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            console.log(action)
        })
        bulider.addCase(getcategories.fulfilled,(state,action)=>{
            state.categories = action.payload;
            console.log(action)
        })
        bulider.addCase(getsinglecatgorey.fulfilled,(state,action)=>{
            state.products = action.payload;
        })
        bulider.addCase(getDet.fulfilled,(state,action)=>{
            state.det = action.payload;
        })
    },
})
export default productSlice.reducer;