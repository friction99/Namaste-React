import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            return ({items:[]});
        }
    }
});
export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;