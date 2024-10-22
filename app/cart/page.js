"use client";

import CartDetails from "@components/CartDetails";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartPage = () => {
  const router = useRouter();

  const [cartDetail, setCartDetail] = useState([]);

  //this is used to fetch data from the api
  const fetchCartApi = async () => {

    try {
      const response = await axios.get(`/api/cart`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      console.log("FROM DATA",data.cartDetails)
      setCartDetail(data.cartDetails)
      console.log("FROM FETCH API SETCART",data.cartDetails)
    } catch (error) {
      console.error(error);
    }
  };

  //helps to fetch  data from the api when the component mountsa

  useEffect(() => {
    fetchCartApi();
    console.log("FROM USE EFFECT",cartDetail)
  }, []);

  console.log("from body",cartDetail);

  //this is used to remove a single item from the cart
  const handleRemoveItem = async (cartId) => {
    try {
      const response = await axios.delete(`/api/cart/${cartId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(response.data.msg);
      fetchCartApi();
      console.log(response.data);
    } catch (error) {
      alert(error.data.msg);
      console.log(error);
    }
  };

  return (
    <section className="h-auto py-3">
      <h1 className="text-center sm:text-xl">
        Total items in cart {cartDetail.length}
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
          Proceed Checkout
        </button>
      </div>
    </section>
  );
};

export default CartPage;
