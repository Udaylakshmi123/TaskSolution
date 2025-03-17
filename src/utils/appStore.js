import { configureStore } from "@reduxjs/toolkit";
import travelProductReducer from "./travelProductSlice.js";

const appStore = configureStore({
    reducer: {
    products:travelProductReducer,
    }
});
export default appStore;