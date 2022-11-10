import React from "react";

const DataTable = () => {
  return (
    <div className="hidden md:grid bg-white px-6 py-4 max-h-[530px] md:max-h-[400px]  items-center rounded-lg shadow-xl">
      
        <h1 className="font-semibold text-lg">View good stocks.</h1>
      
      <div className="overflow-scroll rounded-md  ">
        <table className="w-[100%] text-left ">
          <tbody className="divide-y border-b">
            <tr className=" outline-offset-2 text-lg">
              <th className="py-4 px-6 flex">
                Apple <span className="ml-1 text-gray-500">AAPL</span>
              </th>
              <td className="font-bold py-4 px-6">$142.78</td>
              <td className="text-green-500 font-semibold py-4 px-6">+5.88%</td>
              <td className="py-4 px-6 font-semibold">$2.27T</td>
              <td className="text-right py-4 px-6">
                <a
                  href="#"
                  className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                >
                  Trade
                </a>
              </td>
            </tr>
            <tr className=" outline-offset-2 text-lg">
              <th className="py-4 px-6 flex">
                Microsoft <span className="ml-1 text-gray-500">MSFT</span>
              </th>
              <td className="font-bold py-4 px-6">$238.45</td>
              <td className="text-green-500 font-semibold py-4 px-6">+6.26%</td>
              <td className="py-4 px-6 font-semibold">$1.78T</td>
              <td className="text-right py-4 px-6">
                <a
                  href="#"
                  className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                >
                  Trade
                </a>
              </td>
            </tr>
            <tr className=" outline-offset-2 text-lg">
              <th className="py-4 px-6 flex">
                Tesla <span className="ml-1 text-gray-500">TSLA</span>
              </th>
              <td className="font-bold py-4 px-6">$188.42</td>
              <td className="text-green-500 font-semibold py-4 px-6">+6.35%</td>
              <td className="py-4 px-6 font-semibold">$591.62B</td>
              <td className="text-right py-4 px-6">
                <a
                  href="#"
                  className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                >
                  Trade
                </a>
              </td>
            </tr>
            <tr className=" outline-offset-2 text-lg">
              <th className="py-4 px-6 flex">
                Amazon <span className="ml-1 text-gray-500">AMZN</span>
              </th>
              <td className="font-bold py-4 px-6">$96.83</td>
              <td className="text-green-500 font-semibold py-4 px-6">+12.49%</td>
              <td className="py-4 px-6 font-semibold">$989.30B</td>
              <td className="text-right py-4 px-6">
                <a
                  href="#"
                  className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                >
                  Trade
                </a>
              </td>
            </tr>
            <tr className=" outline-offset-2 text-lg border-b">
              <th className="py-4 px-6 flex">
                Uber <span className="ml-1 text-gray-500">UBER</span>
              </th>
              <td className="font-bold py-4 px-6">$28.75</td>
              <td className="text-green-500 font-semibold py-4 px-6">+8.29%</td>
              <td className="py-4 px-6 font-semibold">$57.30B</td>
              <td className="text-right py-4 px-6">
                <a
                  href="#"
                  className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                >
                  Trade
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
