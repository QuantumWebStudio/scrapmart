"use client";

import CartDetails from "@components/CartDetails";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartPage = () => {
  const router = useRouter();
  const [cartDetail, setCartDetail] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false); // New state variable

  // Fetching data from the API
  const fetchCartApi = async () => {
    try {
      console.log("Fetching cart data...");
      const response = await axios.get("/api/cart", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      setCartDetail(data.cartDetails);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  // Fetch cart data on initial load and when isUpdated changes
  useEffect(() => {
    fetchCartApi();
  }, [isUpdated]); // Now we depend on isUpdated

  // This function can be called after any actions like adding/removing items
  const handleRemoveItem = async (cartId) => {
    try {
      const response = await axios.delete(`/api/cart/${cartId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(response.data.msg);
      
      // Set isUpdated to true to refetch the data
      setIsUpdated(prev => !prev); // Toggle the state to trigger useEffect
    } catch (error) {
      alert("Error removing item:", error.message);
    }
  };

  return (
    <section className="h-auto py-3">
      <h1 className="text-center sm:text-xl">
        Total items in cart {cartDetail.length}
      </h1>
      <div className="grid grid-cols-1 py-4 sm:px-3 place-items-center lg:grid-cols-2 gap-1 sm:gap-2">
        {cartDetail.map((item, index) => (
          <CartDetails cart={item} key={index} remove={handleRemoveItem} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2">
        <button className="px-1 border" onClick={() => router.push("/products")}>
          Continue Shopping
        </button>
        <button className="border px-1" onClick={() => router.push("/checkout")}>
          Proceed Checkout
        </button>
      </div>
    </section>
  );
};

export default CartPage;
