import React, { useEffect } from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import AddIcon from "@mui/icons-material/Add";
import axios from "../axios";

const Watchlist = ({ watchlistData, userId }) => {
  let token = localStorage.getItem("userToken");

  const handleDelete = (stock) => {
    axios.delete("watchlist-delete", {
      data: { user_id: userId, stock: stock },
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <div className="bg-white px-6 py-4 shadow-2xl rounded-lg max-h-[530px] md:max-h-[482px]">
      <h1 className="font-semibold">Here is your watchlist.</h1>
      <div className="my-2 flex overflow-scroll gap-4">
        <div className="max-w-[80px] bg-white text-[#2752FF] font-semibold shadow-md py-2 px-3 my-2 flex justify-center rounded-md">
          <a href="#">$TSLA</a>
          <AddIcon style={{ fontSize: "14px" }} />
        </div>
        <div className="max-w-[80px] bg-white text-[#2752FF] font-semibold shadow-md py-2 px-3 my-2 flex justify-center rounded-md">
          <a href="#">$AAPL</a>
          <AddIcon style={{ fontSize: "14px" }} />
        </div>
        <div className="max-w-[80px] bg-white text-[#2752FF] font-semibold shadow-md py-2 px-3 my-2 flex justify-center rounded-md">
          <a href="#">$MSFT</a>
          <AddIcon style={{ fontSize: "14px" }} />
        </div>
        <div className="max-w-[80px] bg-white text-[#2752FF] font-semibold shadow-md py-2 px-3 my-2 flex justify-center rounded-md">
          <a href="#">$AMZN</a>
          <AddIcon style={{ fontSize: "14px" }} />
        </div>
        <div className="max-w-[80px] bg-white text-[#2752FF] font-semibold shadow-md py-2 px-3 my-2 flex justify-center rounded-md">
          <a href="#">$UBER</a>
          <AddIcon style={{ fontSize: "14px" }} />
        </div>
      </div>
      {watchlistData.map((stock, i) => (
        <div className="flex justify-between items-center my-3 bg-[#2752FF] text-white px-3 py-2 rounded-md shadow-lg">
          <div>
            <a className="font-semibold text-[18px]">${stock.stock}</a>
          </div>
          <CancelPresentationIcon
            className="cursor-pointer"
            fontSize="medium"
            onClick={() => handleDelete(stock.stock)}
          />
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
