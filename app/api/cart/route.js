import { connectToDatabase } from "@utils/connectDataBase";

import { NextResponse } from "next/server";

import Cart from "@model/cartModel";

connectToDatabase();
export const GET = async () => {
  try {
    const cartItems = await Cart.find({});
    return NextResponse.json({
      cartDetails: cartItems,
    });
  } catch (error) {
    console.log(error);
  }
};
