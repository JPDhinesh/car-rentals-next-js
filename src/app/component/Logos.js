import React from "react";
import benz from "../Images/benz logo.png";
import bmw from "../Images/bmw logo.png";
import honda from "../Images/honda logo.png";
import ford from "../Images/ford logo.png";
import nissan from "../Images/nissan logo.webp";
import Image from "next/image";

const Logos = () => {
  return (
    <div className="justify-between w-3/4 m-auto py-4 px-32 hidden lg:flex">
      <Image src={benz} className="h-24 w-20" alt="Benz" />
      <Image src={bmw} className="h-24 w-24" alt="BMW" />
      <Image src={honda} className="h-24 w-28" alt="Honda" />
      <Image src={ford} className="h-24 w-28" alt="Ford" />
      <Image src={nissan} className="h-24 w-28" alt="Nissan" />
    </div>
  );
};

export default Logos;
