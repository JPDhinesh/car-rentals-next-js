import React from "react";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollUp = () => {
  return (
    <Link href="/">
      <AiOutlineArrowUp className="fixed bottom-5 right-10 bg-blue-600 text-4xl text-white rounded-full p-1" />
    </Link>
  );
};

export default ScrollUp;
