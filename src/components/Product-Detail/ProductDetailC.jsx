import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Products_data } from "../../data/Products_data";
import Button from "../Buttons/Button";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import SkeletonDetail from "./SkeletonDetail";

const ProductDetailC = () => {
  const params = useParams(); //useParams get k url id
  const product_data = Products_data;
  const filter_data = product_data[params.id]; //get product data specific index number
  const { id, title, price, description, images, category } = filter_data;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container-fluid bg-orange-500 h-[500px] gap-5 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">Product Details</h1>
        <p>
          <Link to={"/products"}>Products</Link> /{" "}
          <span className="font-bold">{title}</span>
        </p>
      </div>
      {loading && <SkeletonDetail />}
      {!loading && (
        <div className="container-fluid flex justify-center items-center mt-10">
          <div className=" container gap-10 row flex justify-center ">
            <div className="basis-1/2 flex justify-center w-1/2">
              <SwiperSlider images={images} />

              <div className="main-img">
                {/* <img src={images[0]} className="" width={500} /> */}
              </div>
            </div>
            <div className="basis-1/2 h-full">
              <div className="pr-content flex flex-col items-start gap-10">
                <h1 className="text-4xl">{title}</h1>
                <p>{description}</p>
                <h6 className="text-2xl">Rs. {price}</h6>
                <Button />
                <p>
                  Category:{" "}
                  <span className="bg-orange-500 px-5 py-2 rounded-full">
                    {category.name}
                  </span>
                </p>
                <p>SKU: {id}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailC;
