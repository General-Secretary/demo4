
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const login = createAsyncThunk("auth/login", async (val) => {
    try {
        const data = await axios.post("https://linked-posts.routemisr.com/users/signin", val)
        return data
    } catch (error) {
        return error
    }
})
const getToken = () => {
    if (typeof window === "undefined") return null; 
    const token = sessionStorage.getItem("token")||localStorage.getItem("token");
    if (!token) return null;
    try {
        const payload = JSON.parse(atob(token.split(".")[1])); 
        const isExpired = payload.exp * 1000 < Date.now();
        if (isExpired) { localStorage.setItem("token", null);sessionStorage.setItem("token", null); }
        return isExpired ? null : token;
    } catch (error) {
        return null;
    }
};
const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: getToken(),
        userData: null, loading: false,
    }, reducers: {
        logout: (state) => { state.token = null;localStorage.setItem("token", null);sessionStorage.setItem("token", null); },
        stoploading: (state) => { state.loading = false }
    },
    extraReducers: function (x) {
        x.addCase(login.pending, (state) => {
            state.loading = true;
        })
        x.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload); state.loading = false;
            state.token = action.payload.data.token
        })
        x.addCase(login.rejected, (state, action) => {
            state.loading = false;
        });
    }
})
export default authSlice.reducer
export const { stoploading } = authSlice.actions
export const { logout } = authSlice.actions
