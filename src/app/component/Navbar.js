"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between uppercase lg:px-20 px-2 bg-violet-200">
      <h1 className="font-bold lg:text-lg text-base p-2 my-2">
        car rental <span className="text-sm">@</span>premium
      </h1>
      <nav className="p-2 hidden lg:block my-3">
        <Link
          href="/"
          className={`mx-3 ${router.pathname === "/" ? "active" : ""}`}
        >
          home
        </Link>
        <Link href="#rental-details" className={`mx-3 `}>
          rental details
        </Link>
        <Link href="#choose-us" className={`mx-3 `}>
          why choose us
        </Link>
        <Link href="#how-works" className={`mx-3`}>
          How it works
        </Link>
        <Link
          href="/signup"
          className="uppercase bg-blue-600 p-2 rounded text-white mx-3"
        >
          sign up
        </Link>
        <Link
          href="/signin"
          className="uppercase bg-blue-600 p-2 rounded text-white"
        >
          sign in
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
