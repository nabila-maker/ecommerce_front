import React, {useState,useEffect} from "react";
import ReservationCard from"./ReservationCard";
import Userservice from '../services/Userservice';
import { useSelector,useDispatch } from 'react-redux';
import { loadReservations } from "../store/reservation.reducer";


function ReservationProduct() {

// const [data,setData] = useState([]); //data: stock tout nos appel a la donnée on attant un tableau
const reservations = useSelector(state => state.reservation)
const dispatch = useDispatch()
 

   useEffect(()=>{
    const fetchReservations = async() => {
        try{
            const response = await Userservice.getAllByUser()
            dispatch(loadReservations(response.data)) ;
            //  console.log(response.data)
            // setData(response.data)
        }catch{
            console.log('error occured')
        }
    } 
    fetchReservations()
      
   },[]);



    return (

         <div className="reservation">
           { <ul className="reservation-list">
                {reservations.map((reservation)=>(
                    <ReservationCard reservation={reservation} key={reservation.id}  />
                   
                ))}
            
            </ul> }
            
           
         </div>
    );

};

export default ReservationProduct;
