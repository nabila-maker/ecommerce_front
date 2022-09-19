// eslint-disable-next-line
import React, { useEffect, useState,useMemo } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import {toast} from "react-toastify";
// import {Link} from "react-router-dom";
//import 'react-toastify/dist/ReactToastify.css';
import Userservice from "../services/Userservice";
import { removeReservation,validateReservation } from "../store/reservation.reducer";


function ReservationCard({reservation}){
    const dispatch = useDispatch()


async function deleteReservation(id) {
    
   const remove = await Userservice.delete(id)
   console.log(remove)
   if(remove.status === 204){
dispatch(removeReservation(id))
   }
   

  };


  async function validateChallenge(id) {

    
     const update = await Userservice.update(id)
     if(update.status === 201){
        dispatch(validateReservation(id))
           }

    //   toast.warn("Ce challenge a bien été validé",{position: toast.POSITION.TOP_CENTER});
    //   props.history.push("/account/ChallengesValidated")
                       
        // catch(err){
        // // toast.warn("Ce challenge n'a pas pu être validé",{position: toast.POSITION.TOP_CENTER});
        //      }
     }
    
    
    return (
       <li className="card">
        <div className="data-container">
            <ul>
            <li>{reservation.id}</li> 
                 <img src={reservation.products.images} alt='img'></img> 
                <li>{reservation.products.name}</li>
                <li>{reservation.products.description}</li>
                <li>{reservation.products.price}</li> 
                
            </ul>
             <button onClick={() => deleteReservation(reservation.id)}>supprimer</button> 
             <button onClick={() => validateChallenge(reservation.id)}>Valider</button> 




        </div>

       </li>
    );
};

export default ReservationCard;