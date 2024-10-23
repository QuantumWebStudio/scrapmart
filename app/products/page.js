"use client";
import CategoriesListTab from "@components/CategoriesListTab";
import DisplayProductTab from "@components/DisplayProductTab";
import { useState, useEffect } from "react";
import { useProductStore } from "@store/ProductStore";

const ProductsPage = () => {
  const [categorySelected, setCategory] = useState("All");

  //This all comes from the product Store.
  const { fetchProducts, filteredProducts, filterProduct } = useProductStore();

  //This function is used whenEver the page is loaded or mounded or reloaded
  useEffect(() => {
    //API fetch call
    fetchProducts();
  }, []);
  // This function is used to select the category from the page.
  const selectCategory = (category) => {
    setCategory(category);
    filterProduct(category);
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

export default ProductsPage;
