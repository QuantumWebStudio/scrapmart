import { create } from "zustand";
import axios from "axios";

// Create Zustand store
export const useSingleProductStore = create((set) => ({
  singleProduct: [], // state to store single product
  isLoading: false, // state to manage loading
  error: null, // state to handle errors
  checkoutImage: null,
  CheckoutList: null,

  // Function to fetch single items from the backend
  fetchSingleItem: async (productid) => {
    set({ isLoading: true, error: null }); // Set loading state before fetching
    try {
      const response = await axios.get(`/api/product/${productid}`);
      const data = await response.data;
      set({ singleProduct: data.singleProductDetail, isLoading: false });
      // Store data in state
    } catch (error) {
      set({ error: error.message, isLoading: false }); // Handle errors
    }
  },
  addItem: async (productid, formData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`/api/product/${productid}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.data;
      set({ isLoading: false });
      alert(data.msg);
      return data.stat;
    } catch (error) {
      console.error("Frm err", error);
      alert(`from catch ${error}`);
    }
  },
  addCheckout: (formData, image) => {
    set({ checkoutImage: image, CheckoutList: formData });
  },
}));
