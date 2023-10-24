import React from "react";
import Link from "next/link";

const signup = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="border-2 px-24 py-12 rounded-md">
        <h1 className="text-center font-bold">CREATE AN ACCOUNT</h1>
        <div className="flex flex-col my-2">
          <label>Email:</label>
          <input
            type="email"
            className="h-11 border-gray-300 border-2 my-1 rounded-md p-2 focus:outline-gray-400"
          />
        </div>
        <div className="flex flex-col my-2">
          <label>Confirm Email:</label>
          <input
            type="email"
            className="h-11 border-gray-300 border-2 my-1 rounded-md p-2 focus:outline-gray-400"
          />
        </div>
        <div className="flex flex-col my-2">
          <label>Phone Number:</label>
          <input
            type="number"
            className="h-11 border-gray-300 border-2 my-1 rounded-md p-2 focus:outline-gray-400"
          />
        </div>
        <div className="flex flex-col my-2">
          <label>Date of Birth:</label>
          <input
            type="date"
            className="h-11 border-gray-300 border-2 my-1 rounded-md p-2 focus:outline-gray-400"
          />
        </div>
        <div className="flex flex-col my-2">
          <label>Password:</label>
          <input
            type="password"
            className="h-11 border-gray-300 border-2 my-1 rounded-md p-2 focus:outline-gray-400"
          />
        </div>
        <div className="flex flex-col my-2">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="h-11 border-gray-300 border-2 my-1 rounded-md p-2 focus:outline-gray-400"
          />
        </div>
        <button className="bg-black text-white px-3 py-2 rounded-md my-3">
          Create
        </button>
        <p className="text-sm text-gray-500">
          If you are registered already, click here to{" "}
          <Link href="/signin">
            <u className="text-blue-600">Signin</u>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default signup;
