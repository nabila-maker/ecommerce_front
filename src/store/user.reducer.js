import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:null,
    isLogged:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state, action)=>{
            const user = action.payload;
            state.user = user;
            state.isLogged = true;
        },
        logout: (state) => {
            state.user = null;
            state.isLogged = false;
        }
    }
});



export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
