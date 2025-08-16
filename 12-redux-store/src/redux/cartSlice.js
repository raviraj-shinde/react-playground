import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "CartSlice",
    initialState : {
        items : []
    },
    reducers:{
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            state.items.forEach((element) => {
                //do something otherwise pop() atleast
            })
        },
        clearItem : (state, action) => {
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;