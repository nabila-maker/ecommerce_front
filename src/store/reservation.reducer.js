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
        removeReservation:(state,action)=>{
            state.reservations = state.reservations.filter(reservation=> reservation.id !== action.payload);

        },
        validateReservation:(state,action)=>{
            const reservationIndex = state.reservations.findIndex(reservation=> reservation.id === action.payload);
            state.reservations[reservationIndex].status = true
            
            
        }
      
    }
});



export const {loadReservations,removeReservation,validateReservation} = reservationSlice.actions;

export default reservationSlice.reducer;
