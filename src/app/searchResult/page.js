"use client";
import React from "react";
import { useSelector } from "react-redux";
import SearchResultPage from "./SearchResultPage";

function searchResult() {
  const filteredResults = useSelector((state) => state.search.searchResult);
  return (
    <div>
      <h1 className="text-xl text-center font-semibold m-4">Search Results</h1>
      <SearchResultPage filteredResults={filteredResults} />
    </div>
  );
}

export default searchResult;
