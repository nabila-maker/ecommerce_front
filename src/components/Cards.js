// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// eslint-disable-next-line
import api from '../services/api';
// import {toast} from "react-toastify";
// import {Link} from "react-router-dom";
//import 'react-toastify/dist/ReactToastify.css';
import productService from "../services/Productservice"
import Userservice from "../services/Userservice"


function Card({product}){
    // const { product }=;
    //  const ProductId = store.getItem("user")  
    //  useEffect(() =>[product])
//   const state = store.getState()
//   console.log(state.user.user)
const userId = localStorage.getItem("UserId")
console.log('hey',userId)




// const login = userReducer.
 const addProduct = async() => {

    const  data = {"UserId":userId, "ProductId":product.id}
    console.log(data)
     await productService.create(data)
        // const userId= login.userId

// console.log('hello',)
    }

    
    return (
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
    );
};

export default Card;