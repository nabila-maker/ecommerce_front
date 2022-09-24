// eslint-disable-next-line
import React, { useEffect, useState,useMemo } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line
import api from '../services/api';
 import {ToastContainer,toast} from "react-toastify";
// import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import productService from "../services/Productservice"
import Userservice from "../services/Userservice"


function Card({product}){
    // const { product }=;
    //  const ProductId = store.getItem("user")  
    //  useEffect(() =>[product])
//   const state = store.getState()
//   console.log(state.user.user)


const userId = useMemo(()=>JSON.parse(localStorage.getItem("User"))?.user?.id)
console.log(JSON.parse(localStorage.getItem("User"))?.user)




// const login = userReducer.
 const addProduct = async() => {

    const  data = {productId:product.id}
    try{
         await productService.create(data)
     toast.success("ce produit est ajouté à vos réservation",{position: toast.POSITION.TOP_CENTER});

    }
    catch(err){
        toast.error("Vous avez déjà réservé ce produit",{position: toast.POSITION.TOP_CENTER});

    }
    

    }

    
    return (
        <>
        <ToastContainer/>
       <li className="card">
        <div className="data-container">
            <ul>
                <img src={product.images} alt='img'></img>
                <li>{product.name}</li>
                <li>{product.description}</li>
                <li>{product.price}</li>
                
            </ul>
            {/* <button  onClick={() => addProduct(product.id)}>Ajouter</button> */}
            <button  onClick={() => addProduct()}>Ajouter</button>

        </div>

       </li>
       </>
    );
};

export default Card;