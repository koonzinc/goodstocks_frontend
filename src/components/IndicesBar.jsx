import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const IndicesBar = () => {
    const options = {
        chart: {
          type: 'line',
          width: 404,
          height: 216,
          borderRadius: 8,
          
        },
        shadow: {
          color: 'yellow',
          width: 10,
          offsetX: 0,
          offsetY: 0
      },
        title: {
          text: ''
        },
        series: [
          {
            data: [10952, 10575, 11816, 12390, 11028]
          }
        ]
      };
  return (
    <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mt-6 -z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="grid grid-cols-3 gap-9 mx-auto ">
            <HighchartsReact highcharts={Highcharts} options={options} />
            <HighchartsReact highcharts={Highcharts} options={options} />
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default IndicesBar;
