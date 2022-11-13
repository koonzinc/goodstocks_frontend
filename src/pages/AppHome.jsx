import React, { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import DataTable from "../components/DataTable";
import IndicesBar from "../components/IndicesBar";
import ModalPost from "../components/ModalPost";
import Post from "../components/Post";
import StocksBar from "../components/StocksBar";
import Watchlist from "../components/Watchlist";

const AppHome = ({ postModal, handlePost, watchlistData, userId, postData }) => {
  return (
    <div>
      <AppNavbar postModal={postModal} handlePost={handlePost} />
      {postModal ? (
        <ModalPost userId={userId} postModal={postModal} handlePost={handlePost} />
      ) : null}
      <StocksBar />
      <IndicesBar />
      <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
          <Watchlist watchlistData={watchlistData} userId={userId} />
          <Post postData={postData} postModal={postModal} handlePost={handlePost} />
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default AppHome;
