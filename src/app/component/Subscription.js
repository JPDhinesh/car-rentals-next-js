"use client";

import React from "react";

const Subscription = () => {
  return (
    <div className="bg-gray-300 flex flex-col items-center mx-8 mt-32 mb-40 p-16">
      <p className=" capitalize text-md text-justify lg:text-3xl">
        subscribe to our newsletter and get exclusive car
      </p>
      <p className="capitalize text-md text-justify lg:text-3xl">
        rental deals sent directly to your inbox
      </p>
      <form onSubmit={() => alert("subscribed")}>
        <div className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border-b-2 border-violet-700 bg-gray-300 w-64 m-16 text-center text-md focus:border-violet-500 focus:outline-none lg:w-96 lg:text-2xl"
            required
          />
          <button className="px-4 py-2 text-white bg-violet-900 rounded-md">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
