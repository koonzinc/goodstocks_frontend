import React from "react";
import { Link } from "react-router-dom";

const StocksBar = () => {
  return (
    <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-6">
      <div className="flex justify-center max-w-screen-xl mx-auto ">
        <ul className="flex space-x-16 overflow-x-scroll bg-[#2752FF] rounded-lg ">
          <Link to="/stocks/TSLA" replace>
            <li className=" flex justify-center  rounded-xl  ">
              <a
                className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
                href="#"
              >
                $TSLA
              </a>
            </li>
          </Link>
          <Link to="/stocks/AAPL" replace>
            <li className=" flex justify-center  ">
              <a
                className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
                href="#"
              >
                $AAPL
              </a>
            </li>
          </Link>
          <Link to="/stocks/UBER" replace>
            <li className=" flex justify-center  ">
              <a
                className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
                href="#"
              >
                $UBER
              </a>
            </li>
          </Link>
          <Link to="/stocks/AMZN" replace>
            <li className=" flex justify-center  ">
              <a
                className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
                href="#"
              >
                $AMZN
              </a>
            </li>
          </Link>
          <Link to="/stocks/MSFT" replace>
            <li className=" flex justify-center  ">
              <a
                className="bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 py-2 lg:py-2.5 px-4 lg:px-5 rounded-xl text-white font-semibold m-2 shadow-lg"
                href="#"
              >
                $MSFT
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default StocksBar;
