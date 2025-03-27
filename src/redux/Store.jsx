import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './ProductSlice'
import Cartslice from './CartSlice'


const store = configureStore({
    reducer:{
        cart:Cartslice,
        product:ProductSlice
    }
})
export default store;