//This is used to display the categoies in the left side of the /product page

import { ProductCategory } from "@Constants/data";

const CategoriesListTab = ({ select }) => {
  return (
    <div className="flex flex-col py-4 px-2 sticky top-[99px] min-h-screen justify-start items-start  lg:w-[150px]  flex-wrap gap-3">
      {ProductCategory.map((category, index) => (
        <h1
          onClick={() => {
            select(category.name);
          }}
          key={index}
          className="active:underline cursor-pointer  active:text-gray-500"
        >
          {category.lable}
        </h1>
      ))}
    </div>
  );
};

export default CategoriesListTab;
