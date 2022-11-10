import React, { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import DataTable from "../components/DataTable";
import IndicesBar from "../components/IndicesBar";
import ModalPost from "../components/ModalPost";
import Post from "../components/Post";
import StocksBar from "../components/StocksBar";
import Watchlist from "../components/Watchlist";

const AppHome = () => {
  const [postModal, setPostModal] = useState(false);

  const handlePost = () => {
    setPostModal(!postModal)
  }

  return (
    <div>
      <AppNavbar />
      {postModal ? <ModalPost handlePost={handlePost}   /> : null}
      <StocksBar />
      <IndicesBar />
      <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
          <Watchlist />
          <Post handlePost={handlePost} />
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default AppHome;
