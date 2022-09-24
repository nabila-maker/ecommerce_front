import React, { useEffect,useState } from "react";
import ReservationCard from "./ReservationCard";
import Userservice from "../services/Userservice";
import { useSelector, useDispatch } from "react-redux";
import { loadReservations } from "../store/reservation.reducer";

function ReservationList({ reserved }) {
  

  const reservations = useSelector((state) =>
    filterReservations(state.reservation.reservations)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await Userservice.getAllByUser();
        dispatch(loadReservations(response.data));
      } catch {
        console.log("error occured");
      }
    };
    fetchReservations();
  }, []);

  function filterReservations(reservations) {
    return reservations.filter((reservation) =>

      reserved ? reservation.status : !reservation.status
    );
  }

  return (
    <div className="reservation">
      {
        <ul className="reservation-list">
          {reservations.map((reservation) => (
            <ReservationCard reservation={reservation} key={reservation.id} reserved={reserved} />
          ))}
        </ul>
      }
    </div>
  );
}

export default ReservationList;
