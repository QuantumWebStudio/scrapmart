"use client";
import { useSingleProductStore } from "@store/SingleProductStore";
import { useEffect, useState } from "react";

const DisplayCheckoutFile = () => {
  const { checkoutImage } = useSingleProductStore();
  const [image, setImage] = useState(checkoutImage);
  useEffect(() => {
    setImage(checkoutImage);
  }, []);
  console.log("Checkout", image);
  return (
    <div className=" flex justify-center items-center w-full sm:w-1/2  h-full text-center">
      <div className=" w-full sm:h-1/2 h-full sm:w-1/2">
        {checkoutImage && (
          <img
            src={URL.createObjectURL(image)}
            className="sm:w-full rounded-lg  sm:h-full object-cover"
            alt="Uploaded File"
          />
        )}
      </div>
    </div>
  );
};

export default DisplayCheckoutFile;
