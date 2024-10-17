"use client";
import ProductImagePreview from "@components/ProductImagePreview";
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
  },[]);
  console.log("From Single Resoire", singleProduct);

  return (
    <section className="h-dvh border">
      {singleProduct && (
        <div>
          <ProductImagePreview
            images={singleProduct.images}
            display={display}
          />
          <div>
            <h2>{singleProduct.name}</h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
