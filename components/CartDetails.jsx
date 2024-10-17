// this is being mapped in /cart page

"use client";

import trash from "@public/icons/trash.svg";
import Image from "next/image";

// this fucntion is used to display individual cart items in the page by feching from the API

const CartDetails = ({ cart, remove }) => {
  console.log(cart);
  return (
    <div className=" border flex flex-row   justify-center items-center">
      {/* This div contains the image and video of the  cart item */}

      <div className=" flex flex-col justify-start items-center gap-2 rounded-md sm:h-[300px] h-[200px]  w-[150px]  sm:w-[230px] lg:w-[250px] text-sm sm:text-lg "></div>

      {/* This div contains all the info about the Cart */}
      <div className=" flex flex-col justify-start items-center gap-2 rounded-md sm:h-[300px] h-[200px]  w-[150px]  sm:w-[230px] lg:w-[250px] text-sm sm:text-lg ">
        <div className="px-3 py-2 h-auto">
          <h1>Name: {cart.productName}</h1>
          <h1>Category: {cart.productCategory}</h1>
          <h1>Description: {cart.productDescription}</h1>
          <h1>
            Quantity: {cart.productQuantity} {cart.productUnit}
          </h1>
          <h1>Price: {cart.productPrice}</h1>
        </div>

        {/* This div contains a button which is used to remove a particular cart item from the page */}
        <div
          className="text-center  bg-red-600 mx-auto rounded-md w-fit flex justify-center items-center "
          onClick={() => remove(cart._id)}
        >
          <button className=" px-1 text-white">Remove </button>
          <Image src={trash} height={20} width={20} alt="TRASH" />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
