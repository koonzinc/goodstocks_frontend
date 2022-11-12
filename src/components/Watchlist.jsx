import React from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import AddIcon from "@mui/icons-material/Add";

const Watchlist = () => {
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
      <div className="flex justify-between items-center my-3 bg-[#2752FF] text-white px-3 py-2 rounded-md shadow-lg">
        <div>
          <a className="font-semibold text-[18px]">$TSLA</a>
          <p className="text-[10px]">Tesla Inc.</p>
        </div>
        <CancelPresentationIcon fontSize="large" />
      </div>
      <div className="flex justify-between items-center my-3 bg-[#2752FF] text-white px-3 py-2 rounded-md shadow-lg">
        <div>
          <a className="font-semibold text-[18px]">$TSLA</a>
          <p className="text-[10px]">Tesla Inc.</p>
        </div>
        <CancelPresentationIcon fontSize="large" />
      </div>
      <div className="flex justify-between items-center my-3 bg-[#2752FF] text-white px-3 py-2 rounded-md shadow-lg">
        <div>
          <a className="font-semibold text-[18px]">$TSLA</a>
          <p className="text-[10px]">Tesla Inc.</p>
        </div>
        <CancelPresentationIcon fontSize="large" />
      </div>
      <div className="flex justify-between items-center my-3 bg-[#2752FF] text-white px-3 py-2 rounded-md shadow-lg">
        <div>
          <a className="font-semibold text-[18px]">$TSLA</a>
          <p className="text-[10px]">Tesla Inc.</p>
        </div>
        <CancelPresentationIcon fontSize="large" />
      </div>
      <div className="flex justify-between items-center my-3 bg-[#2752FF] text-white px-3 py-2 rounded-md shadow-lg">
        <div>
          <a className="font-semibold text-[18px]">$TSLA</a>
          <p className="text-[10px]">Tesla Inc.</p>
        </div>
        <CancelPresentationIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Watchlist;
