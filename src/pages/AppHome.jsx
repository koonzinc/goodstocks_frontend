import React from "react";
import AppNavbar from "../components/AppNavbar";
import DataTable from "../components/DataTable";
import IndicesBar from "../components/IndicesBar";
import Post from "../components/Post";
import StocksBar from "../components/StocksBar";
import Watchlist from "../components/Watchlist";

const AppHome = () => {
  return (
    <div>
      <AppNavbar />
      <StocksBar />
      <IndicesBar />
      <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-6">
        <div className="flex items-center mx-auto max-w-screen-xl">
          <Watchlist />
          <Post />
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default AppHome;
