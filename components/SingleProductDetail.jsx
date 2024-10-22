"use client";

import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";

const SingleProductDetail = ({ product }) => {
  const { productid } = useParams();
  const router = useRouter();
  const [Quantity, setQuantity] = useState(1); // Default to 0, can remain as is
  const [Unit, setUnit] = useState("KG"); // Default to "KG", can remain as is
  const [Description, setDescription] = useState(""); // Initial state is an empty string
  const [ProductImage, setProductImage] = useState(null);

  const sendBackend = async (formData) => {
    try {
      const response = await axios.post(`/api/product/${productid}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await response.data;
      console.log("FROM DATA", data.msg);
      alert(data.msg);
      if (data.status === 200) {
        router.push("/cart");
      }
    } catch (err) {
      console.error("Frm err", err);
      alert(`from catch ${err}`);
    }
  };

  const sendToCart = () => {
    //This is used to create a from data  object to send it to backend
    const formData = new FormData();
    formData.append("productId", product._id);
    formData.append("productName", product.productName);
    formData.append("productCategory", product.productCategory);
    formData.append("productQuantity", Quantity);
    formData.append("productUnit", Unit);
    formData.append("productPrice", product.productPrice);
    formData.append("productDescription", Description);
    if (ProductImage) {
      formData.append("productImage", ProductImage);
      alert("Please Wait");
    } else {
      alert("upload the image");
    }

    //This is used to send the data from frontend to backend
    sendBackend(formData);
  };

  //this is used to save the item details to the localStorage and it will be accessed in the checkout page and once the order is confrimed  it will be deleted
  const sendToCheckout = () => {
    alert("button clicked");

    //The data will be stored in the local storage and will be accessed in the checkout page. As soon as the order is placed the localstorage data will be erased. just for the timing am using this. I will find  a better way to do this.
    localStorage.setItem("productId", product._id);
    localStorage.setItem("productName", product.productName);
    localStorage.setItem("productCategory", product.productCategory);
    localStorage.setItem("productQuantity", Quantity);
    localStorage.setItem("productUnit", Unit);
    localStorage.setItem("productDescription", Description);
    localStorage.setItem("productImage", ProductImage);
    localStorage.setItem("productPrice", product.productPrice);
    router.push("/checkout");
  };

  return (
    <div className="w-full max-w-lg py-4 lg:w-1/2 mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-4">
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="productName"
            value={product.productName}
            readOnly
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="productCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="productCategory"
            value={product.productCategory}
            readOnly
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="Quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="Quantity"
            min={0}
            required
            value={Quantity} // Controlled input
            onChange={(e) => setQuantity(e.target.value)} // Convert to number
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="Unit"
            className="block text-sm font-medium text-gray-700"
          >
            Unit
          </label>
          <select
            id="Unit"
            required
            value={Unit} // Controlled input
            onChange={(e) => setUnit(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="KG">KG</option>
            <option value="QTY">QTY</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="Description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="Description"
            rows="3"
            value={Description} // Controlled input
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="ProductImage"
            className="block text-sm font-medium text-black"
          >
            Upload Image
          </label>
          <input
            type="file"
            required
            id="ProductImage"
            accept="image/*"
            onChange={(e) => setProductImage(e.target.files[0])}
            className="mt-1 block w-full px-3 py-2 bg-black bg-opacity-50 border border-transparent rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button
          type="button"
            onClick={() => {
              sendToCart();
            }}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to Cart
          </button>
          <button
            type="button"
            onClick={() => {
              sendToCheckout();
            }}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Proceed to Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleProductDetail;
