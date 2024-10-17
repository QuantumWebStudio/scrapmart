"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bars from "@public/icons/bars.svg"
import cart from "@public/icons/cart.svg"
import profile from "@public/icons/profile.svg"
import Image from 'next/image'
const Header = () => {
  const router= useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  return (
    <header className="py-5 sticky z-10 bg-white top-0 px-3 flex justify-between gap-4  items-center">
      <div className="flex sm:hidden" onClick={()=>setMobileView((prev)=>(!prev))}>
        <Image  width={30}
        height={30}
        src={bars} 
        alt="MENU"
        />
      </div>
      <div>
        <Link href="/" className="text-2xl sm:text-4xl text-center font-extrabold text-green-800">SCRAP MART</Link>
      </div>
      <div className="flex sm:hidden justify-items-center items-center gap-2">
        
        <Image src={cart} width={30} height={30} onClick={()=>router.push("/cart")} alt="CART" />
        <Image src={profile} width={30} height={30} onClick={()=>router.push("/register")} alt="PROFILE" />
      </div>
      <nav className="hidden sm:flex text-xl ">
        <ul className="justify-center font-semibol dark:text-black items-center gap-4 flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          {isLoggedIn ? <h1>USERNAME:</h1> : <Link href="/register">Register</Link>}
        </ul>
      </nav>
      
      {
        mobileView && (
          <div className="absolute text-center flex flex-col justify-center items-center gap-2 top-[60px] left-2 w-[100px] h-[100px] rounded-xl bg-green-100">
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            
          </div>
        )
      }
    </header>
  );
};

export default Header;
