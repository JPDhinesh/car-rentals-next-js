import React from "react";
import AllVehicle from "./AllVehicle";

const page = () => {
  return (
    <div>
      <h1 className="text-center lg:text-3xl text-xl uppercase font-semibold text-blue-800 mb-12 mt-6">
        Available Vehicles
      </h1>
      <AllVehicle />
    </div>
  );
};

export default page;
