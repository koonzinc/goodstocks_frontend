import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import axios from "../axios";
import { useParams } from "react-router-dom";

const IndividualStocks = ({ userId }) => {
  const [price, setPrice] = useState("");
  const [close, setClose] = useState([]);
  const [info, setInfo] = useState({});
  const [index, setIndex] = useState(0);

  const { stockId } = useParams();

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stockId}&outputsize=full&apikey=XCI1NEPICS3X7H9B`;
  const companyUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockId}&apikey=XCI1NEPICS3X7H9B`;

  useEffect(() => {
    close.length <= 0 && getPrice();
    close.length > 0 && setPrice(close[0][1]["4. close"]);
    close.length <= 0 && getInfo();
  }, [close]);

  const getPrice = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    const thePrice = response.data["Weekly Time Series"];

    thePrice && setClose(Object.entries(thePrice));
    console.log(response.data["Weekly Time Series"]);
    setIndex((prev) => prev + 1);
  };

  const getInfo = async () => {
    const response = await axios.get(companyUrl);
    setInfo(response.data);
  };
  
  const addToWatchlist = () => {
    let token = localStorage.getItem("userToken");
    axios.post(
      "watchlist-add",
      {
        user_id: userId,
        stock: stockId,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  return (
    <>
      <AppNavbar />
      <div className="bg-white px-4 lg:px-6 py-2.5 mt-6">
        <div className="flex flex-col justify-center items-center mx-auto max-w-screen-xl">
          <div className="flex justify-between w-[100%] px-4 py-4 items-center">
            <h1 className="font-semibold">{stockId}</h1>
            <button
              onClick={addToWatchlist}
              className="bg-[#2752FF] px-4 py-1 rounded-md text-white "
            >
              Watch
            </button>
          </div>
          <div className="h-96 w-[100%] px-4 py-2 my-2">This is a chart</div>
          <div className="w-[100%] bg-white shadow-xl rounded-lg flex justify-center ">
            <table className="w-[100%]">
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
                    {price && price}
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Sector:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info.Sector}
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Industry:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info.Industry}
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Market Capitalization:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info.MarketCapitalization}
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Dividend Yield:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info.DividendYield}
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Earnings Per Share:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info.EPS}
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    52 Week High:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info["52WeekHigh"]}
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    52 Week Low:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info["52WeekLow"]}
                  </td>
                </tr>
                <tr>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Profit Margin:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info.ProfitMargin}
                  </td>
                  <td className="pl-4 py-2 font-semibold text-gray-700">
                    Operating Margin:
                  </td>
                  <td className="text-[#2752ff]  flex justify-end pr-4 py-2 text-right">
                    {info && info.OperatingMarginTTM}
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
