import React from "react";
import { Products_data } from "../data/Products_data";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/product-card/ProductCard";

const Products = () => {
//   const navigate = useNavigate();

//   const navigate_handle = (id) => {
//     navigate(`/product/${id}`);
//   };

  return (
    <>
    
        <ProductCard />
      
      {/* {
        Products_data.map((current_obj,current_index)=>{
            const {id,title,price} = current_obj;
            return(
                <div>
                    <h4>id{id}</h4>
                    <h3>Title : {title}</h3>
                    <h3>Price : {price}</h3>
                    <button onClick={()=>navigate_handle(current_index)}>View Details</button>
                </div>
            )
        })
    } */}
    </>
  );
};

export default Products;
