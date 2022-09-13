// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import api from '../services/api';
// import {toast} from "react-toastify";
// import {Link} from "react-router-dom";
//import 'react-toastify/dist/ReactToastify.css';
import productService from "../services/Productservice"


function Card({product}){
    // const { product }=;
    // const userId =localStorage.getItem("user")
//    const user = JSON.parse(data)
  
 useEffect(() => console.log(product),[product])
  
      const addProduct = async(id) => {
          console.log(id)
        await productService.addProduct(id)
        // .history.push("/Account")

      }


      
    
    return (
       <li className="card">
        <div className="data-container">
            <ul>
                <img src={product.images}></img>
                <li>{product.name}</li>
                <li>{product.description}</li>
                <li>{product.price}</li>
                
            </ul>
            <button  onClick={() => addProduct(product.id)}>Ajouter</button>
          

        </div>

       </li>
    );
};

export default Card;