import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredential: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            const expiryTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
            localStorage.setItem("expiryTime", expiryTime);

        },
        logout: (state) => {
            state.userInfo = null;
            localStorage.clear();
        }
    }

})

export const { setCredential, logout } = authSlice.actions;
export default authSlice.reducer;