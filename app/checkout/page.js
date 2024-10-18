import DisplayCheckoutDetail from "@components/DisplayCheckoutDetail";
import DisplayCheckoutFile from "@components/DisplayCheckoutFile";

import React from "react";

const CheckoutPage = () => {
  return (
    <section className="h-dvh flex flex-col sm:flex-row justify-center items-center">
      <DisplayCheckoutFile />
      <DisplayCheckoutDetail />
    </section>
  );
};

export default CheckoutPage;
