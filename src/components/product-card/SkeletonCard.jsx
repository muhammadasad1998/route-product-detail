import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";
import { Products_data } from "../../data/Products_data";
const SkeletonCard = () => {
  const product_data = Products_data; // get all card data from Products_data.jsx

  return (
    <>
      <Grid
        container
        display="flex"
        className="w-3/4"
        justifyContent="space-between"
        gap={{ md: 5 }}
      >
        {product_data.map((current_obj, current_ind) => {
          return (
            <Grid
              xs={12}
              sm={6}
              md={3}
              lg={2}
              className="pr-card rounded-md border border-orange-500 hover:shadow-2xl ease-in duration-300 hover:-translate-y-6"
            >
              {/* get current index in parameter to redirect in that url*/}
              <div>
                <div className="pr-img">
                  <Skeleton variant="rectangular" height={235} />
                </div>
                <div className="pr-content text-left p-3">
                <Skeleton variant="rectangular" height={64} />
                <Skeleton variant="rectangular" width={84} height={29} className="mt-3"/>

                <p className="text-lg text-base/7 my-4"><Skeleton variant="rectangular"  height={50} className="mt-3"/></p>

                   <Skeleton variant="rectangular"  height={28}/>
                  <h6 className="text-xl font-semibold"></h6>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default SkeletonCard;
