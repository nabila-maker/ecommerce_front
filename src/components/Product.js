import React, { useState, useEffect } from "react";
import Card from "./Cards";
import productService from "../services/Productservice";

function Product() {
  const [data, setData] = useState([]); //data: stock tout nos appel a la donnée on attant un tableau

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAll();
        setData(response.data);
      } catch {
        console.log("error occured");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {
        <ul className="products-list">
          {data.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </ul>
      }
    </div>
  );
}

export default Product;
