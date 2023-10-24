"use client";
import React, { useState, useEffect } from "react";
import { MdPeopleAlt, MdAcUnit } from "react-icons/md";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";

const CarDetails = ({ params }) => {
  const [car, setCar] = useState([]);
  const [selectedKm, setSelectedKm] = useState(150); // Default to 150km

  const id = params.id;

  useEffect(() => {
    const getDataFromAPI = async () => {
      const response = await fetch(`/api/vehicle/${id}`);
      const result = await response.json();
      setCar(result);

      // Set the initial price based on the selectedKm
      if (result.price) {
        setPrice(result.price);
      }
    };
    getDataFromAPI();
  }, [id]);

  const [price, setPrice] = useState(0); // Initialize price

  useEffect(() => {
    if (car.length > 0 && car[0].price) {
      setPrice(car[0].price + (selectedKm - 150) * 15);
    }
  }, [selectedKm, car]);

  const handleKmChange = (km) => {
    setSelectedKm(km);
  };

  return (
    <div>
      {car.map((vehicle) => (
        <div className="grid grid-cols-2 m-20">
          <div className="w-full h-4/5">
            <img src={vehicle.carImg} alt={vehicle.carName} className="w-5/6" />
          </div>
          <div className="text-center">
            <div className="my-3">
              <button
                className={`px-2 py-1 ${
                  selectedKm === 150
                    ? "bg-violet-600 text-white"
                    : "bg-gray-300"
                } rounded-sm mx-6`}
                onClick={() => handleKmChange(150)}
              >
                150 KM
              </button>
              <button
                className={`px-2 py-1 ${
                  selectedKm === 300
                    ? "bg-violet-600 text-white"
                    : "bg-gray-300"
                } rounded-sm mx-6`}
                onClick={() => handleKmChange(300)}
              >
                300 KM
              </button>
              <button
                className={`px-2 py-1 ${
                  selectedKm === 500
                    ? "bg-violet-600 text-white"
                    : "bg-gray-300"
                } rounded-sm mx-6`}
                onClick={() => handleKmChange(500)}
              >
                500 KM
              </button>
            </div>
            <h1 className="uppercase text-3xl font-bold mt-10 mb-6">
              {vehicle.title}
            </h1>
            <div className="flex justify-center my-12">
              <p className="flex items-center">
                <MdPeopleAlt className="mx-2 text-2xl" />
                <span className="text-gray-600 text-xl mr-10">
                  {vehicle.passengerCount}
                </span>
              </p>
              <p className="flex items-center justify-start">
                <GiGearStickPattern className="mx-2 text-2xl" />
                <span className="text-gray-600 text-xl">{vehicle.gearBox}</span>
              </p>
            </div>
            <div className="flex relative left-64 my-12">
              <p className="flex items-center mr-32">
                <MdAcUnit className="mx-2 text-2xl" />
                <span className="text-gray-600 text-xl">
                  {vehicle.airCondition}
                </span>
              </p>
              <p className="flex items-center justify-start">
                <GiCarDoor className="mx-2 text-2xl" />
                <span className="text-gray-600 text-xl">{vehicle.doors}</span>
              </p>
            </div>
            <p className="text-2xl font-medium mt-16 mb-8">Price: {price}</p>
            <button className="px-28 py-2 bg-black text-white m-5">
              BOOK NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;
