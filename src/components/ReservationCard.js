// eslint-disable-next-line
import React, { useEffect, useState,useMemo } from 'react';
import { useDispatch } from 'react-redux';
 import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Userservice from "../services/Userservice";
import { removeReservation,validateReservation } from "../store/reservation.reducer";


function ReservationCard({reservation}){
    const dispatch = useDispatch()


async function deleteReservation(id) {
    
    
   const remove = await Userservice.delete(id)
   if(remove.status === 204){
dispatch(removeReservation(id))
toast.success("cette réservation à été supprimé",{position: toast.POSITION.TOP_CENTER});

   }else{
    toast.warn("Cette réservation n'a pas pu être supprimé",{position: toast.POSITION.TOP_CENTER});

  }
   

  };


  async function validateChallenge(id) {

    
     const update = await Userservice.update(id)
    //  update.status === 201
        dispatch(validateReservation(id))
        toast.success("Cette réservation a bien été validé",{position: toast.POSITION.TOP_CENTER});
        
    
     }
    
    
    return (
        <>
        <ToastContainer/>
       <li className="card">

        <div className="data-container">
            <ul>
            {/* <li>{reservation.id}</li>  */}
                 <img src={reservation.products.images} alt='img'></img> 
                <li>{reservation.products.name}</li>
                <li>{reservation.products.description}</li>
                <li>{reservation.products.price}</li> 
                
            </ul>
             <button onClick={() => deleteReservation(reservation.id)}>supprimer</button> 
             <button onClick={() => validateChallenge(reservation.id)}>Valider</button> 




        </div>

       </li></>
    );
};

export default ReservationCard;