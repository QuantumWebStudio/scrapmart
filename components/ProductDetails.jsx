// This is used to display the details of the product in /product page.
"use client";
import { useRouter } from "next/navigation";
const ProductDetails = ({ product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product._id}`)}
      className=" cursor-pointer border w-[140px] sm:w-[200px] h-[300px]"
    >
      {product && (
        <div>
          <img className=" h-[150px] sm:h-[200px] " src={product.images[0]} />
          {/* This div is used to display a front image  of the product */}

          {/* This div is used to display the small description abount the item  */}
          <div className="px-2">
            <h1>Name: {product.productName}</h1>
            <h1>Category: {product.productCategory}</h1>
            <h1>Price: {product.productPrice}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
