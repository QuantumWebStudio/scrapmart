"use client";
import DisplayCheckoutDetail from "@components/DisplayCheckoutDetail";
import DisplayCheckoutFile from "@components/DisplayCheckoutFile";
import { useRouter } from "next/navigation";
import { useSingleProductStore } from "@store/SingleProductStore";
const CheckoutPage = () => {
  const router = useRouter();
  const { CheckoutList } = useSingleProductStore();

  if (!CheckoutList) {
    return (
      <section className="h-dvh text-3xl sm:text-5xl flex flex-col gap-5 justify-center items-center text-center">
        <h1>Ops the data is lost! Please go back</h1>
        <button className="border-4 border-black bg-black px-1 text-white rounded-lg" onClick={()=>router.back()} >Go Back</button>
      </section>
    );
  }

  return (
    <section className="h-auto w-full flex flex-col justify-center items-center">
      <div className="py-4 text-sm">
        <h1 className=" sm:text-xl text-center text-red-600 ">
          PLEASE DO NOT REFRESH THE PAGE
        </h1>
        <h1 className=" sm:text-xl text-center ">STEP1 -------Step2</h1>
      </div>
      <div className="flex w-full h-full border-2 flex-col sm:flex-row justify-center items-center">
        <DisplayCheckoutFile />
        <DisplayCheckoutDetail />
      </div>
    </section>
  );
};

export default CheckoutPage;
