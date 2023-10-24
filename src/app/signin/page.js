import React from "react";
import Link from "next/link";

const signin = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-3/12 border-2 px-12 py-12 rounded-md shadow-xl">
        <div className="flex flex-col my-1">
          <label>Email</label>
          <input
            type="email"
            className="h-11 border-2 border-gray-300 focus:outline-gray-400 my-1 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col my-1">
          <label>Password</label>
          <input
            type="password"
            className="h-11 border-2 border-gray-300 focus:outline-gray-400 mt-1 mb-6 p-2 rounded-md"
          />
        </div>
        <buton className="bg-black text-white px-3 py-2 rounded-md mt-6">
          Signin
        </buton>
        <p className="text-sm text-gray-500 mt-4">
          If you don't have an account, click here to{" "}
          <Link href="/signup">
            <u className="text-blue-600">Signup</u>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default signin;
