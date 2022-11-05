import React from "react";

const StocksBar = () => {
  return (
    <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-6">
      <div className="flex justify-center max-w-screen-xl mx-auto ">
        <ul className="flex space-x-16 overflow-x-scroll bg-[#2752FF] rounded-lg ">
          <li className=" flex justify-center  rounded-xl  ">
            <a
            
            className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
              href="#"
            >
              $TSLA
            </a>
          </li>
          <li className=" flex justify-center  ">
            <a
              className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
              href="#"
            >
              $AAPL
            </a>
          </li>
          <li className=" flex justify-center  ">
            <a
              className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
              href="#"
            >
              $UBER
            </a>
          </li>
          <li className=" flex justify-center  ">
            <a
              className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
              href="#"
            >
              $AMZN
            </a>
          </li>
          <li className=" flex justify-center  ">
            <a
              className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
              href="#"
            >
              $MSFT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StocksBar;



