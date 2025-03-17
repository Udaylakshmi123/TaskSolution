import { createSlice } from "@reduxjs/toolkit";

const travelProductSlice = createSlice({
    name:'products',
    initialState: {
        productsList:null
    },
    reducers:{
        addProductsList(state,action){
            state.productsList = action.payload;
        }
    }
});
export const {addProductsList} = travelProductSlice.actions;
export default travelProductSlice.reducer;