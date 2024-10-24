import { useSingleProductStore } from "@store/SingleProductStore";

const DisplayCheckoutDetail = () => {
  const { CheckoutList } = useSingleProductStore();

  return (
    <div className="  min-h-[400px] sm:w-1/2 w-full">
      <div>
        <h1 className="text-xl font-bold text-center pt-4">
          Verify the details
        </h1>
      </div>
      <div>
        <h1 className="text-xl font-bold">
          Name: {CheckoutList.get("productName")}
        </h1>
        <h1 className="text-xl font-bold">
          Category: {CheckoutList.get("productCategory")}
        </h1>
        <h1 className="text-xl font-bold">
          Description: {CheckoutList.get("productDescription")}
        </h1>
        <h1 className="text-xl font-bold">
          Quantity: {CheckoutList.get("productQuantity")}{" "}
          {CheckoutList.get("productUnit")}
        </h1>
        <h1 className="text-xl font-bold">
          Sub Total: {CheckoutList.get("productPrice")}
        </h1>
        <h1 className="text-xl font-bold">Total Price:</h1>
      </div>
      <div className="flex justify-center items-center">
        <button>NEXT</button>
      </div>
    </div>
  );
};

export default DisplayCheckoutDetail;
