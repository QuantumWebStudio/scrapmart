"use client";

import { useProductStore } from "@store/ProductStore";
import { useEffect } from "react";
const OrderDetailPage = () => {
  // const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    // fetchProducts();
  }, []);

  // console.log(products);
  return <div>OrderDetailPage</div>;
};

export default OrderDetailPage;
