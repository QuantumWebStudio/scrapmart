import { create } from "zustand";
import axios from "axios";

// Create Zustand store
export const useCartStore = create((set, get) => ({
  cartItems: [], // state to store cart items
  isLoading: false, // state to manage loading
  error: null, // state to handle errors

  // Function to fetch cart items from the backend
  fetchCartItem: async () => {
    set({ isLoading: true, error: null }); // Set loading state before fetching
    try {
      const response = await axios.get("/api/cart"); // Fetch data from backend
      set({ cartItems: response.data.cartDetails, isLoading: false }); // Store data in state
    } catch (error) {
      set({ error: error.message, isLoading: false }); // Handle errors
    }
  },

  // Function to delete an item from the cart
  deleteCartItem: async (cartId) => {
    set({ isLoading: true, error: null }); // Set loading state before fetching

    try {
      await axios.delete(`/api/cart/${cartId}`); // Deletes the data from backend

      console.log("Item deleted with ID:", cartId);

      // Refetch the cart items after deletion

      await get().fetchCartItem(); // Using get() to call fetchCartItem
      
    } catch (error) {
      set({ error: error.message, isLoading: false }); // Handle errors
    } finally {
      set({ isLoading: false }); // Ensure loading state is false after operation
    }
  },
}));
