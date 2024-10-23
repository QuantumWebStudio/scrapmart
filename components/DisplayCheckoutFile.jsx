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
    <div className="border flex justify-center items-center w-1/2 h-full text-center">
      <div className="h-1/2 w-full border">
        {checkoutImage && (
          <div>
            <img
              src={URL.createObjectURL(image)}
              className=""
              alt="Uploaded File"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayCheckoutFile;
