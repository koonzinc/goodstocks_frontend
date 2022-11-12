import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import NasdaqChart from "./IndicesComponents/NasdaqChart";
import SandPChart from "./IndicesComponents/SandPChart";
import DowJones from "./IndicesComponents/DowJones";

const IndicesBar = () => {
  return (
    <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-6 -z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mx-auto ">
          <NasdaqChart />
          <SandPChart />
          <DowJones />
        </div>
      </div>
    </div>
  );
};

export default IndicesBar;
