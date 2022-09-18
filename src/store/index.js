import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user.reducer';
import reservationReducer from './reservation.reducer'

export default configureStore({
    reducer: {
        user:userReducer,
        reservation:reservationReducer
    }
})