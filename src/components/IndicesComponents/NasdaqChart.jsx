import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const NasdaqChart = () => {
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
          text: 'Nasdaq 100'
        },
        series: [
          {
            data: [10353, 10988, 10575, 11816, 12390, 11028, 12081, 12334, 14220, 13751, 14239, 15644, 15537, 15498, 14448, 15259, 14672, 14503, 13748, 13962, 13246]
          }
        ]
      };
  return (
    <>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </>
  )
}

export default NasdaqChart