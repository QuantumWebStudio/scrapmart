"use client";
import ProductImagePreview from "@components/ProductImagePreview";
import SingleProductDetail from "@components/SingleProductDetail";
import axios from "axios";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  

  //This is used to extract the dynamic id from the url
  const { productid } = useParams();


  //This is used to fetch the single product data from the api
  const fetchSingleProduct = async (productid) => {
    const response = await axios.get(`/api/product/${productid}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    setSingleProduct(data.singleProductDetail);
  };

  useEffect(() => {
    fetchSingleProduct(productid);
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
