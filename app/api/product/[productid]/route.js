import { connectToDatabase } from "@utils/connectDataBase";
import { NextResponse } from "next/server";
import Product from "@model/productModel";

// Ensure the database is connected
connectToDatabase();

// Define the GET handler function for dynamic product ID
export const GET = async (request, { params }) => {
  try {
    const { productid } = params; // Access the dynamic productId from the URL
    console.log(productid);
    try {
      const getProduct = await Product.findById(productid); // Find product by dynamic ID
      // If product is found, return it in the response
      return NextResponse.json(
        {
          singleProductDetail: getProduct,
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error fetching product:", error);

      // Return a 500 error response if there's an internal server error
      return NextResponse.json(
        {
          error: "Internal Server Error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};
