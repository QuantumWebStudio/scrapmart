import { connectToDatabase } from "@utils/connectDataBase";

import { NextResponse } from "next/server";

import Cart from "@model/cartModel";

export const GET = async () => {
  try {
    //To connect the dataBase
    connectToDatabase();
    const cartItems = await Cart.find({}).sort({ createdAt: -1 });
    console.log("from cart details from backend", cartItems);
    return NextResponse.json({
      cartDetails: cartItems,
      msg: "Cart details fetched sucessfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error fetching cart items",
    });
  }
};
