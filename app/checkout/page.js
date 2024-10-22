"use client"
import DisplayCheckoutDetail from "@components/DisplayCheckoutDetail";
import DisplayCheckoutFile from "@components/DisplayCheckoutFile";

import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [productId, setProductId] = useState("");
  const [productName, setproductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUnit, setProductUnit] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productVideo, setProductVideo] = useState("");

  const fetchLocalData = () => {
    setProductId(localStorage.getItem("productId"));
    setproductName(localStorage.getItem("productName"));
    setProductCategory(localStorage.getItem("productCategory"));
    setProductQuantity(localStorage.getItem("productQuantity"));
    setProductUnit(localStorage.getItem("productUnit"));
    setProductDescription(localStorage.getItem("productDescription"));
    setProductImage(localStorage.getItem("productImage"));
    setProductVideo(localStorage.getItem("productVideo"));
    setProductPrice(localStorage.getItem("productPrice"));
  };

  useEffect(()=>{
    fetchLocalData()
  },[])


  console.log(productCategory)
  console.log(productDescription)

  return (
    <section className="h-dvh flex flex-col sm:flex-row justify-center items-center">
      <DisplayCheckoutFile />
      <DisplayCheckoutDetail />
    </section>
  );
};

export default CheckoutPage;
