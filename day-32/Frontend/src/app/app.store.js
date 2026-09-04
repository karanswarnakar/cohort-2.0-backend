import { configureStore } from "@reduxjs/toolkit"
import authReduser from "../features/auth/auth.slice.js";
export const store = configureStore({
    reducer:{
        auth: authReduser,
    }
})