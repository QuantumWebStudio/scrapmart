import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productUnit: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      // required: true,
    },
    productImage: {
      type: String,
      // required:true;
    },
    prodcutVideo: {
      type: String,
      //required:true;
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.cart || mongoose.model("cart", cartSchema);

module.exports = Cart;
