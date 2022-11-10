import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DowJones = () => {
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
          text: 'Dow Jones'
        },
        series: [
          {
            data: [32513.94, 32732.95, 28725.51, 31510.43, 32845.13, 30775.43, 32990.12, 32977.21, 34678.35, 33892.60, 35131.86, 36338.30, 34483.72, 35819.56, 33843.92, 35360.73, 34935.47, 34502.51, 34529.45, 33874.85, 32981.55]
          }
        ]
      };
  return (
    <>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </>
  )
}

export default DowJones