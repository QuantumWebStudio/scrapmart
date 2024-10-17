"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
const ProductImagePreview = ({ images, display }) => {
  const [mainImage, setMainImage] = useState(display);

  useEffect(() => {
    setMainImage(display);
  },[display]);

  return (
    <div className=" w-full lg:w-1/2">
      {images && (
        <div>
          <Image
            src={mainImage}
            alt={mainImage}
            className="object-cover my-2 h-[400px] w-[300px] sm:w-[350px] mx-auto cursor-pointer rounded-md "
          />
          <div className="flex justify-center gap-1 sm:gap-5 items-center ">
            {images.map((image, index) => {
              return (
                <Image
                  className="sm:w-[100px] w-[75px] h-[100px] object-cover text-center cursor-pointer"
                  key={index}
                  onClick={() => setMainImage(image)}
                  src={image}
                  alt={image}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImagePreview;

// const DisplayImages = () => {
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div className=" w-full lg:w-1/2">
//       <img
//         src={mainImage}
//         alt={mainImage}
//         className="object-cover my-2 h-[400px] w-[300px] sm:w-[350px] mx-auto cursor-pointer rounded-md "
//       />
//       <div className="flex justify-center gap-1 sm:gap-5 items-center ">
//         {images.map((image, index) => {
//           return (
//             <img
//               className="sm:w-[100px] w-[75px] h-[100px] object-cover text-center cursor-pointer"
//               key={index}
//               onClick={() => setMainImage(image)}
//               src={image}
//               alt={image}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default DisplayImages;
