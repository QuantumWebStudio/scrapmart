import { connectToDatabase } from "@utils/connectDataBase";
import { NextResponse } from "next/server";
import Product from "@model/productModel";
import Cart from "@model/cartModel";

//This is used to conect the cloudnary platform
import { connectCloudinary } from "@utils/connectCloudnary";

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

export const POST = async (request) => {
  try {
    //this call is done to connect with the cloudinary platform
    connectCloudinary();

    //Extracting or dsctructring the variables inside the formData
    const data = await request.formData();
    const productName = data.get("productName");
    const productCategory = data.get("productCategory");
    const productDescription = data.get("productDescription");
    const productQuantity = data.get("productQuantity");
    const productUnit = data.get("productUnit");
    const productId = data.get("productId");
    const productPrice = data.get("productPrice");
    const productImage = data.get("productImage");
    const productVideo = data.get("productVideo");

    //This function returns the uploaded status of the image and video
    const imageData = await imageUpload(productImage);
    const videoData = await videoUpload(productVideo);

    try {
      const addedItems = await await Cart.create({
        productId,
        productName,
        productUnit,
        productPrice,
        productQuantity,
        productDescription,
        productCategory,
        productImage: imageData.secure_url,
        prodcutVideo: videoData.secure_url,
      });
      return NextResponse.json(
        {
          msg: "Item Added to Cart",
          cartDetail: addedItems,
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Failed to  add item to cart", error);

      // Return a 500 error response if there's an internal server error
      return NextResponse.json(
        {
          error: "Something went wrong!!!",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in the server", error);
  }
};
