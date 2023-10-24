"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdPeopleAlt, MdAcUnit } from "react-icons/md";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";
import Link from "next/link";

const Vehicle = () => {
  const Count = 4;

  const [car, setCar] = useState([]);

  useEffect(() => {
    const getDataFromAPI = async () => {
      const response = await fetch("/api/vehicle");
      const result = await response.json();
      setCar(result);
    };
    getDataFromAPI();
  }, []);

  return (
    <div className="m-6 lg:mx-20 lg:my-16" id="rental-details">
      <h1 className="text-center lg:text-3xl text-xl uppercase font-semibold text-blue-800 mb-16">
        Vehicles Available
      </h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 lg:gap-16">
        {car.slice(0, Count).map((vehicle) => {
          return (
            <div key={vehicle.id} className="shadow-xl rounded-md">
              <div className="m-6">
                <div className="h-48">
                  <img src={vehicle.carImg} alt={vehicle.title} />
                </div>

                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <p className="mx-2 opacity-75">
                    {vehicle.Rating} ({vehicle.ReviewCount} Reviews)
                  </p>
                </div>
                <h1 className="uppercase font-semibold text-xl my-2">
                  {vehicle.title}
                </h1>
                <div className="flex justify-between my-4">
                  <p className="flex items-center">
                    <MdPeopleAlt className="mx-2 text-xl" />
                    <span className="text-gray-600">
                      {vehicle.passengerCount}
                    </span>
                  </p>
                  <p className="flex items-center justify-start">
                    <GiGearStickPattern className="mx-2 text-xl" />
                    <span className="text-gray-600">{vehicle.gearBox}</span>
                  </p>
                </div>
                <div className="flex justify-between my-3">
                  <p className="flex items-center">
                    <MdAcUnit className="mx-2 text-xl" />
                    <span className="text-gray-600">
                      {vehicle.airCondition}
                    </span>
                  </p>
                  <p className="flex items-center justify-start relative -left-5">
                    <GiCarDoor className="mx-2 text-xl" />
                    <span className="text-gray-600">{vehicle.doors}</span>
                  </p>
                </div>
                <hr></hr>
                <div className="mt-3">
                  <p className="font-semibold">Rs. {vehicle.price} / day</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center m-10 mt-16">
        <Link href="/vehicle">
          <button className="font-semibold text-blue-900 py-2 px-3 border border-gray-300 rounded-md shadow-md">
            See All Vehicles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Vehicle;
