"use client";
import CategoriesListTab from "@components/CategoriesListTab";
import DisplayProductTab from "@components/DisplayProductTab";
import { useState, useEffect } from "react";

import axios from "axios";

const page = () => {
  const [categorySelected, setCategory] = useState("All Items");
  const [filteredProducts, setFiteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  //This is the function that fetches the data from the API

  const fetchFromApi = async () => {
    try {
      const res = await axios.get(`/api/products`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;

      //assigning the data from the api to local variable
      setFiteredProducts(data.ProductDetails);
      setAllProducts(data.ProductDetails);
    } catch (error) {
      console.error("FROM ERROR", error);
    }
  };

  useEffect(() => {
    //API fetch call
    fetchFromApi();
  }, []);

  // This function is used to filter the products from the data base so that we can show onl the selected category items
  const FilterProducts = (categoryFilter) => {
    if (categoryFilter === "All Items") {
      setFiteredProducts(allProducts);
    } else {
      const productFiltered = allProducts.filter(
        (product) => product.productCategory === categoryFilter
      );
      setFiteredProducts(productFiltered);
    }
  };
  // This function is used to select the category from the page.
  const selectCategory = (category) => {
    setCategory(category);
    FilterProducts(category);
  };
  

  return (
    <section>
      <h1 className="text-center text-3xl font-semibold pb-4">PRODUCTS</h1>

      <div className="flex justify-center items-baseline">
        <CategoriesListTab select={selectCategory} />
        <DisplayProductTab
          selectedCategory={categorySelected}
          products={filteredProducts}
        />
      </div>
    </section>
  );
};

export default page;
