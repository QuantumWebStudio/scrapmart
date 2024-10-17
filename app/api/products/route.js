import { connectToDatabase } from "@utils/connectDataBase";

import { NextResponse } from "next/server";

import Product from "@model/productModel";

connectToDatabase();
export const GET = async () => {
  try {
    const products = await Product.find({});
    return NextResponse.json({
      ProductDetails: products,
    });
  } catch (error) {
    console.log(error);
  }
};
