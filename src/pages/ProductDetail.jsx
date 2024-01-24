import React from 'react'
import { Products_data } from '../data/Products_data'
import { useParams } from 'react-router-dom';
import ProductDetailC from '../components/Product-Detail/ProductDetailC';

const ProductDetail = () => {
    const params = useParams()
    const product_detail = Products_data;
    // const filter_data = product_detail.filter([1])
    // const find_data = product_detail.find(params.id)
    const filter_data = product_detail[params.id]
    // const filter_arrat_data = product_detail.filter((pro)=>{
    //     return pro.id == params.id;
    // })

    // console.log(filter_arrat_data)
    
    // console.log(product_detail.find((product_detail)=>product_detail[params.id]))
    return (
        <>
        {/* <h1>{filter_arrat_data.title}</h1> */}
        <ProductDetailC/>
            {/* <div>Product Name: {filter_data.title}</div>
            <div>Rs.{filter_data.price}</div>
            <img src={filter_data.images[0]} width={200} /> */}
        </>

    )
}

export default ProductDetail