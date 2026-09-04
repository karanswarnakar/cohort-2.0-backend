import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        lodding: true,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLodding: (state, action) => {
            state.lodding = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
}) 
;

export const {setUser,setLodding, setError } = authSlice.actions
export default authSlice.reducer