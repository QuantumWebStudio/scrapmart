
// This is being mapped by the CategoriesListTab

"use client";
import { featuredProductCategory } from "@Constants/data";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import metal from "@public/images/metal.jpg"

const Categories = () => {
    const router = useRouter();
    const Navigate= ()=>{
        router.push("/products")
    }
  
  return (
    <section className="flex min-h-dvh my-6 flex-wrap justify-center gap-3 px-1 items-center">
      {featuredProductCategory.map((category, index) => (
        <div
          key={index}
          onClick={()=>Navigate()}
          className=" rounded-lg text-center text-xl cursor-pointer w-[150px] sm:w-[200px] sm:h-[250px] border h-[200px]"
        >
          <h1>{category.lable}</h1>
          <Image
            src={metal}
            width={150}
            height={150}
            alt=" ALTERNATIVE TEXT CATEGORIES"
          />
        </div>
      ))}
      
    </section>
  );
};

export default Categories;
