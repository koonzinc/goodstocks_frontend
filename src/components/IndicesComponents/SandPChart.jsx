import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SandPChart = () => {
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
          text: 'S&P 500'
        },
        series: [
          {
            data: [3748.57, 3871.98, 3585.62, 3955.00, 4130.29, 3785.38, 4132.15, 4131.93, 4530.41, 4373.94, 4515.55, 4766.18, 4567, 4605.38, 4307.54, 4522.68, 4395.26, 4297.50, 4204.11, 4181.17, 3972.89	]
          }
        ]
      };
  return (
    <>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </>
  )
}

export default SandPChart