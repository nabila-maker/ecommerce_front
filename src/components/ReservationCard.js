// // eslint-disable-next-line
import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import {Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Userservice from "../services/Userservice";
import {
  removeReservation,
  validateReservation,
} from "../store/reservation.reducer";

function ReservationCard({ reservation,reserved }) {
  const dispatch = useDispatch();
  

  async function deleteReservation(id) {
    const remove = await Userservice.delete(id);
    if (remove.status === 204) {
      dispatch(removeReservation(id));
      toast.success("cette réservation à été supprimé", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.warn("Cette réservation n'a pas pu être supprimé", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  async function validatedReservation(reservationId) {
    const update = await Userservice.update({ reservationId });
    if (update.status === 201) {

      dispatch(validateReservation(reservationId));
      toast.success("cette réservation à été validé", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <li className="card">
      <div className="data-container">
        <ul>
          {/* <li>{reservation.id}</li> */}
          <img src={reservation.products.images} alt="img"></img>
          <li>{reservation.products.name}</li>
          <li>{reservation.products.description}</li>
          <li>{reservation.products.price}</li>
        </ul> 
        
        {!reserved && (<>
        <button onClick={() => deleteReservation(reservation.id)}>
          supprimer
        </button>
        <button onClick={() => validatedReservation(reservation.id)} >
          Valider
        </button>
         </>)}
      </div>
    </li>
  
  );
}

export default ReservationCard;
