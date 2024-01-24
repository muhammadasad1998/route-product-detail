import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";

const SkeletonDetail = () => {
  return (
    <div className="container-fluid flex justify-center items-center mt-10">
      <div className=" container gap-10 row flex justify-center ">
        <div className="basis-1/2 flex justify-center w-1/2">
          <Skeleton variant="rectangular" width={768} height={768} />
          
          
        </div>
        <div className="basis-1/2 h-full">
          <div className="pr-content flex flex-col items-start gap-10">
           
          <Skeleton variant="rectangular" width="100%" height={35} />
           
            
          <Skeleton variant="rectangular" width="100%" height={72} />

            
          <Skeleton variant="rectangular" width="62px" height={32} />
          <Skeleton variant="rectangular" width="132px" height={40} />
          <Skeleton variant="rectangular" width="165px" height={40} />
          <Skeleton variant="rectangular" width="60px" height={24} />


           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetail;
