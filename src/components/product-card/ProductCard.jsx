import React, { useEffect, useState } from "react";
import { Products_data } from "../../data/Products_data";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import SkeletonCard from "../product-card/SkeletonCard";

const ProductCard = () => {
  const product_data = Products_data; // get all card data from Products_data.jsx
  const navigate = useNavigate(); // use useNavigate hook from react and store it on variable
  const handle_card_link = (id) => {
    navigate(`/product/${id}`); // receive array index in parameter
  };
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
        <h1 className="text-4xl font-bold">Products</h1>
        <p>
          <Link to={"/products"}>Products</Link>
        </p>
      </div>
      <div className="container-fluid flex justify-center mt-16">
        <Grid
          container
          display="flex"
          className="w-3/4"
          justifyContent="space-between"
          gap={{ md: 5 }}
        >
          {loading && <SkeletonCard />}
          {!loading &&
            product_data.map((current_obj, current_ind) => {
              const { id, title, price, description, images, category } =
                current_obj;
              return (
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={2}
                  className="pr-card rounded-md border border-orange-500 hover:shadow-2xl ease-in duration-300 hover:-translate-y-6"
                >
                  <button onClick={() => handle_card_link(current_ind)}>
                    {/* get current index in parameter to redirect in that url*/}
                    <div>
                      <div className="pr-img">
                        <img src={images[0]} className="w-full" />
                      </div>
                      <div className="pr-content text-left p-3">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="mt-3">
                          <span className=" bg-orange-500 px-4 py-1 rounded-full ">
                            {category.name}
                          </span>
                        </p>
                        <p className="text-lg text-base/7 my-4">{`${description.substring(
                          0,
                          45
                        )}...`}</p>{" "}
                        {/*// Show first 50 characters with ellipsis*/}
                        <h6 className="text-xl font-semibold">Rs. {price}</h6>
                      </div>
                    </div>
                  </button>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default ProductCard;
