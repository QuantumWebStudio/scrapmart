"use client"
import { useRouter } from "next/navigation";

const HeroSection = () => {
  
  const router= useRouter()

  return (
    <section className="h-screen bg-[#00712D] text-white">
      <div className="h-full">
        <div className="w-full h-dvh text-center sm:w-1/2 flex flex-col justify-center gap-10  items-center">
          <h1 className="text-6xl font-extrabold">SCRAP MART</h1>
          <p className="text-2xl">
            A market Place from Scrap to Sustainability
          </p>
          <button onClick={()=>router.push("/register")} className="border-2 text-xl text-black border-white p-1 rounded-lg mt-3 hover:bg-white hover:text-[#347928] bg-white">
            Get Started
          </button>
        </div>
        <div>IMAGE</div>
      </div>
    </section>
  );
};

export default HeroSection;
