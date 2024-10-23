"use client";

import CartDetails from "@components/CartDetails";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCartStore } from "@store/CartStore";
const CartPage = () => {
  const router = useRouter();

  const { cartItems, fetchCartItem, deleteCartItem } = useCartStore();

  // Fetch cart data on initial load and when isUpdated changes
  useEffect(() => {
    fetchCartItem();
  }, []);
  console.log("CART items", cartItems);
  return (
    <section className="h-auto py-3">
      <h1 className="text-center sm:text-xl">
        Total items in cart {cartItems.length}
      </h1>
      <div className="grid grid-cols-1 py-4 sm:px-3 place-items-center lg:grid-cols-2 gap-1 sm:gap-2">
        {cartItems.map((item, index) => (
          <CartDetails cart={item} key={index} remove={deleteCartItem} />
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
