"use client";
import ProductImagePreview from "@components/ProductImagePreview";
import SingleProductDetail from "@components/SingleProductDetail";
import { useSingleProductStore } from "@store/SingleProductStore";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

const SingleProductPage = () => {
  
  const {fetchSingleItem ,singleProduct}=useSingleProductStore()
  
  
  

  //This is used to extract the dynamic id from the url
  const { productid } = useParams();
  useEffect(() => {
    fetchSingleItem(productid);
  }, []);

  return (
    <section className="h-auto pb-4 bg-gradient-to-br from-green-400 via-blue-500 to-green-600">
      {singleProduct && (
        <div className="flex-col flex justify-center items-center gap-2 lg:flex-row">
          <ProductImagePreview images={singleProduct.images} />
          <SingleProductDetail product={singleProduct} />
        </div>
      )}
    </section>
  );
};

export default SingleProductPage;
