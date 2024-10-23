import { create } from "zustand";
import axios from "axios";

// Create Zustand store
export const useProductStore = create((set, get) => ({
  allProducts: [], // state to store API data
  filteredProducts: [], // state to store filtered API data
  isLoading: false, // state to manage loading
  error: null, // state to handle errors

  // Function to fetch products from the backend
  fetchProducts: async () => {
    set({ isLoading: true, error: null }); // Set loading state before fetching
    try {
      const response = await axios.get("/api/products"); // Fetch data from backend
      set({ allProducts: response.data.ProductDetails, isLoading: false }); // Store data in state
      // Also set filtered products to all products initially
      set({ filteredProducts: response.data.ProductDetails });
    } catch (error) {
      set({ error: error.message, isLoading: false }); // Handle errors
    }
  },

  // Function to filter products by category
  filterProduct: (category) => {
    const allProducts = get().allProducts; // Access allProducts from the store
    if (category === "All") {
      set({ filteredProducts: allProducts }); // Set to all products if category is "All"
    } else {
      set({
        filteredProducts: allProducts.filter(
          (product) => product.productCategory === category
        ), // Filter products by category
      });
    }
  },

  

}));
