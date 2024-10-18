"use client";

import CartDetails from "@components/CartDetails";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartPage = () => {
  const router = useRouter();

  const [cartDetail, setCartDetail] = useState([]);

  const fetchCartApi = async () => {
    const response = await axios.get(`api/cart`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    const  data = response.data;
    setCartDetail(data.cartDetails);

  };
  console.log(cartDetail)
  useEffect(() => {
    fetchCartApi();
  }, []);

  const handleRemoveItem = (cartId) => {
    console.log(`remoing item ${cartId}`);
  };
  return (
    <section className="h-auto py-3">
      <h1 className="text-center sm:text-xl">
        Total Items in Cart: {cartDetail.length}
      </h1>
      <div className="grid grid-cols-1  py-4 sm:px-3 place-items-center lg:grid-cols-2 gap-1 sm:gap-2">
        {cartDetail.map((item, index) => (
          <CartDetails cart={item} key={index} remove={handleRemoveItem} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2">
        <button
          className="px-1 border"
          onClick={() => router.push("/products")}
        >
          Continue Shopping
        </button>
        <button
          className="border px-1"
          onClick={() => router.push("/checkout")}
        >
          Proceed CheckOut
        </button>
      </div>
    </section>
  );
};

export default CartPage;
