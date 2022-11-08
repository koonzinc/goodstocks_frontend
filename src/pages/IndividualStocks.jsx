import HighchartsReact from "highcharts-react-official";
import React from "react";
import AppNavbar from "../components/AppNavbar";

const IndividualStocks = () => {
  return (
    <>
      <AppNavbar />
      <div className="bg-white px-4 lg:px-6 py-2.5 mt-6">
        <div className="flex flex-col justify-center items-center mx-auto max-w-screen-xl">
          <div className="flex justify-between w-[100%] px-4 py-4 items-center">
              <h1 className="font-semibold">$AAPL</h1>
              <button className="bg-[#2752FF] px-4 py-1 rounded-md text-white ">Watch</button>
          </div>
          <div className="h-96 w-[100%] px-4 py-2">This is a chart</div>
          <div className="w-[100%] bg-white shadow-xl rounded-lg flex justify-center ">
            <table className="w-[100%]" >
              <thead>
                <tr>
                  <th
                    className="py-4 text-2xl font-semibold text-gray-900"
                    colSpan={4}
                  >
                    Statistics
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Price:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    $10
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Sector:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    Technology
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Industry:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    Info Technology
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Market Capitalization:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    $106 Billion
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Dividend Yield:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    1.36%
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Earnings Per Share:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    0.43
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    52 Week High:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    $392
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    52 Week Low:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    $33
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Profit Margin:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    $2049 Million
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Operating Margin:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    $100 Million
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="pl-4 py-2 text-sm text-gray-500" colSpan={4}>
                    Data delayed by 1 day.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualStocks;
