"use client";
import ProductImagePreview from "@components/ProductImagePreview";
import SingleProductDetail from "@components/SingleProductDetail";
import axios from "axios";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [display, setDisplay] = useState(null);

  //This is used to extract the dynamic id from the url
  const { productid } = useParams();

  const fetchSingleProduct = async (productid) => {
    const response = await axios.get(`/api/product/${productid}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    setSingleProduct(data.singleProductDetail);
    setDisplay(data.singleProductDetail.images[0]);
  };

  useEffect(() => {
    fetchSingleProduct(productid);
  }, []);

  return (
    <section className="h-auto">
      {singleProduct && (
        <div className="flex-col flex justify-center items-center gap-2 lg:flex-row">
          <ProductImagePreview images={singleProduct.images} />
          <SingleProductDetail product={singleProduct} />
        </div>
      )}
    </section>
  );
};

export default ProductPage;
