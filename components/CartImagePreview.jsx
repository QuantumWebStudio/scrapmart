//This is used to display the image and video tht the client has uploaded

import React from "react";

const CartImagePreview = ({ image }) => {
  return (
    <div className=" flex flex-col justify-start items-center gap-2 rounded-md sm:h-[300px] h-[150px]  w-[150px]  sm:w-[300px] lg:w-[250px] text-sm sm:text-lg ">
      <img src={image} alt="uploaded image" className="object-cover h-full" />
    </div>
  );
};

export default CartImagePreview;
