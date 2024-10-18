import { connectToDatabase } from "@utils/connectDataBase";
import { NextResponse } from "next/server";
import Product from "@model/productModel";
import Cart from "@model/cartModel";

//This is used to conect the cloudnary platform

//This is used to upload the files into the cloudinary and the uploaded url is stored in the cart database
import {
  videoUpload,
  imageUpload,
  removeFile,
} from "@helpers/cloudnaryOperations";
import { cartDetail } from "@Constants/data";
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

import { connectToDatabase } from "@utils/connectDataBase";
import { NextResponse } from "next/server";
import Product from "@model/productModel";
import Cart from "@model/cartModel";

import { videoUpload, imageUpload } from "@helpers/cloudnaryOperations";

// Ensure the database is connected
connectToDatabase();

export const POST = async (request) => {
  console.log("The POST Function is being called");
  try {
    const data = await request.formData();
    const productImage = data.get("productImage");
    const productVideo = data.get("productVideo");

    // Define max file size limit (50MB)
    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes

    // Check if the image or video exceeds the 50MB limit
    if (productImage.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { msg: "Image file is too large. Max allowed size is 50MB." },
        { status: 413 }
      );
    }

    if (productVideo.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { msg: "Video file is too large. Max allowed size is 50MB." },
        { status: 413 }
      );
    }

    // Proceed with Cloudinary upload if files are within size limits
    const imageData = await imageUpload(productImage);
    const videoData = await videoUpload(productVideo);

    const addedItems = await Cart.create({
      productName: data.get("productName"),
      productCategory: data.get("productCategory"),
      productDescription: data.get("productDescription"),
      productQuantity: data.get("productQuantity"),
      productUnit: data.get("productUnit"),
      productId: data.get("productId"),
      productPrice: data.get("productPrice"),
      productImage: imageData.secure_url,
      productVideo: videoData.secure_url,
    });

    return NextResponse.json(
      { msg: "Item Added to Cart", cartDetail: addedItems },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to add item to cart", error);
    return NextResponse.json(
      { msg: "Failed to add item to cart" },
      { status: 500 }
    );
  }
};

// Add the config here, at the end of the file
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb", // Set body size limit to 50MB
    },
  },
};
