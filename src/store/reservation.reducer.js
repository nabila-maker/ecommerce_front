import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    reservations:[]
};

const reservationSlice = createSlice({
    name:'reservation',
    initialState,
    reducers:{
        loadReservations:(state, action)=>{
         state.reservations = action.payload
        },
        remove:(state,action)=>{
            state.reservations = state.reservations.filter(reservation=> reservation.id !== action.payload);

        },
        validate:(state,action)=>{
            const reservationIndex = state.reservations.findIndex(reservation=> reservation.id === action.payload);
            state.reservations[reservationIndex].status = true
            
            
        }
      
    }
});



export const {loadReservations,remove,validate} = reservationSlice.actions;

export default reservationSlice.reducer;
