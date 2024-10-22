
import { connectToDatabase } from "@utils/connectDataBase";

import { NextResponse } from "next/server";

connectToDatabase();
import Cart from "@model/cartModel";

export const DELETE = async (request, { params }) => {
    try {
      const { cartId}  = params; // Access the dynamic productId from the URL
      const removedItem = await Cart.findByIdAndDelete(cartId);

      if(!removedItem){
        return NextResponse.json({
            msg: "Item not found",
            status: 404
        })
      }
      return NextResponse.json({
        msg: "Item deleted sucessfully",
        status: 200,
        removedItem,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        msg: "could not remove the item from the cart",
      });
    }
  };