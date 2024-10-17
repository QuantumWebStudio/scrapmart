"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductImagePreview = ({ images = []}) => {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]); // Added images as a dependency

  return (
    <div className="w-full lg:w-1/2">
      <img
        src={mainImage}
        alt="Main product image" // Improved alt text
        className="object-cover my-2 h-[400px] w-[300px] sm:w-[350px] mx-auto cursor-pointer rounded-md"
      />
      <div className="flex justify-center gap-1 sm:gap-5 items-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail of ${image}`} // Improved alt text
            className="sm:w-[100px] w-[75px] h-[100px] object-cover text-center cursor-pointer"
            onClick={() => setMainImage(image)} // Change main image on click
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImagePreview;
