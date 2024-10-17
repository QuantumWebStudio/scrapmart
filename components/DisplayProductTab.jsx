//This is ued to display all the products in the right side of the /product page.

import ProductDetails from "./ProductDetails";
const DisplayProductTab = ({ selectedCategory, products }) => {
  return (
    <div className="w-full p-2  border min-h-screen ">
      {products && (
        <div>
          <div className="py-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <h1 className="text-center">Category: {selectedCategory}</h1>
            <input
              type="text"
              placeholder="Find your Item"
              className="border-2 border-black placeholder:text-center rounded-md active:border-black"
            />
            <h1 className="text-center">Total Items: {products.length}</h1>
          </div>
          <div className="flex justify-center gap-4 items-center flex-wrap">
            {products.map((product, index) => (
              <ProductDetails key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayProductTab;
