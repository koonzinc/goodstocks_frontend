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
                Bitcoin <span className="ml-1 text-gray-500">BTC</span>
              </th>
              <td className="font-bold py-4 px-6">$38,716.43</td>
              <td className="text-red-500 font-semibold py-4 px-6">-10.82%</td>
              <td className="py-4 px-6 font-semibold">$729,729,745,340.82</td>
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
                Bitcoin <span className="ml-1 text-gray-500">BTC</span>
              </th>
              <td className="font-bold py-4 px-6">$38,716.43</td>
              <td className="text-red-500 font-semibold py-4 px-6">-10.82%</td>
              <td className="py-4 px-6 font-semibold">$729,729,745,340.82</td>
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
                Bitcoin <span className="ml-1 text-gray-500">BTC</span>
              </th>
              <td className="font-bold py-4 px-6">$38,716.43</td>
              <td className="text-red-500 font-semibold py-4 px-6">-10.82%</td>
              <td className="py-4 px-6 font-semibold">$729,729,745,340.82</td>
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
                Bitcoin <span className="ml-1 text-gray-500">BTC</span>
              </th>
              <td className="font-bold py-4 px-6">$38,716.43</td>
              <td className="text-red-500 font-semibold py-4 px-6">-10.82%</td>
              <td className="py-4 px-6 font-semibold">$729,729,745,340.82</td>
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
                Bitcoin <span className="ml-1 text-gray-500">BTC</span>
              </th>
              <td className="font-bold py-4 px-6">$38,716.43</td>
              <td className="text-red-500 font-semibold py-4 px-6">-10.82%</td>
              <td className="py-4 px-6 font-semibold">$729,729,745,340.82</td>
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
