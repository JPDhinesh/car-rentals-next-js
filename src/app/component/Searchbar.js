"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../store/search-slice";
import Link from "next/link";

const Searchbar = () => {
  const [car, setCar] = useState([]);
  const dispatch = useDispatch();

  const { location, startDate, returnDate } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    const getDataFromAPI = async () => {
      const response = await fetch("/api/vehicle");
      const result = await response.json();
      setCar(result);
    };
    getDataFromAPI();
  }, []);

  const locationHandler = (e) => {
    dispatch(searchAction.setLocation(e.target.value));
  };

  const startDateHandler = (e) => {
    dispatch(searchAction.setStartDate(e.target.value));
  };

  const returnDAteHandler = (e) => {
    dispatch(searchAction.setReturnDate(e.target.value));
  };

  const filterDataByLocation = () => {
    const filteredResults = car.filter(
      (vehicle) => vehicle.location === location
    );
    dispatch(searchAction.setSearchResult(filteredResults));
  };

  return (
    <form onSubmit={filterDataByLocation}>
      <div className="w-3/4 lg:h-36 h-auto shadow-md flex flex-col lg:flex-row m-auto uppercase p-2 items-center rounded-md relative lg:-top-8 -top-4 bg-white">
        <div className="lg:m-16 lg:mr-20 m-3">
          <label>location</label>
          <br />
          <input
            type="text"
            className="form-input lg:w-64 w-52 lg:h-12 h-10 border border-gray-300 rounded-md mt-2 p-4"
            placeholder="Search your location"
            value={location}
            onChange={locationHandler}
            required
          />
        </div>
        <div class="border-l h-8 border-gray-500 hidden lg:block"></div>
        <div className="lg:m-20 m-3">
          <label>pickup date</label>
          <br />
          <input
            type="date"
            className="form-input lg:w-64 w-52 lg:h-12 h-10 border border-gray-300 rounded-md mt-2 p-4"
            value={startDate}
            onChange={startDateHandler}
            required
          />
        </div>
        <div class="border-l h-8 border-gray-500 hidden lg:block"></div>
        <div className="lg:m-20 m-3">
          <label>return date</label>
          <br />
          <input
            type="date"
            className="form-input lg:w-64 w-52 lg:h-12 h-10 border border-gray-300 rounded-md mt-2 p-4"
            value={returnDate}
            onChange={returnDAteHandler}
            required
          />
        </div>
        <Link href="/searchResult">
          <button className="bg-blue-600 px-3 py-1 rounded-sm text-white m-3 lg:m-0">
            Search
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Searchbar;
