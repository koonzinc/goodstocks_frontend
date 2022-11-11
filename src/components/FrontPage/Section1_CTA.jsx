import React from "react";
import { Link } from "react-router-dom";

const Section1_CTA = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 mx-auto lg:mb-16 text-center">
          <h2 className="font-bold text-5xl mb-6">
            Buy good stocks at a good price
          </h2>
          <p className="text-gray-500 ">
            Buy and sell 5 stocks with no currencies because we don't accept
            payments due to this being a portfolio project.
          </p>
        </div>
        {/* Table */}
        <div className=" overflow-scroll mb-2">
          <table className="w-[100%] text-left mb-6">
            <tbody className="divide-y border-b">
              <tr className=" outline-offset-2 text-lg">
                <th className="py-4 px-6 flex">
                  Microsoft <span className="ml-1 text-gray-500">MSFT</span>
                </th>
                <td className="font-bold py-4 px-6">$246.56</td>
                <td className="text-green-500 font-semibold py-4 px-6">
                  +1.47%
                </td>
                <td className="py-4 px-6 font-semibold">$1.84T</td>
                <td className="text-right py-4 px-6">
                  <Link to="/stocks/MSFT">
                    <a
                      href="#"
                      className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                    >
                      Trade
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className=" outline-offset-2 text-lg">
                <th className="py-4 px-6 flex">
                  Uber <span className="ml-1 text-gray-500">UBER</span>
                </th>
                <td className="font-bold py-4 px-6">$29.08</td>
                <td className="text-red-500 font-semibold py-4 px-6">-2.03%</td>
                <td className="py-4 px-6 font-semibold">$58.02B</td>
                <td className="text-right py-4 px-6">
                  <Link to="/stocks/UBER">
                    <a
                      href="#"
                      className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                    >
                      Trade
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className=" outline-offset-2 text-lg">
                <th className="py-4 px-6 flex">
                  Tesla <span className="ml-1 text-gray-500">TSLA</span>
                </th>
                <td className="font-bold py-4 px-6">$194.42</td>
                <td className="text-green-500 font-semibold py-4 px-6">
                  +1.95%
                </td>
                <td className="py-4 px-6 font-semibold">$609.28B</td>
                <td className="text-right py-4 px-6">
                  <Link to="/stocks/TSLA">
                    <a
                      href="#"
                      className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                    >
                      Trade
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className=" outline-offset-2 text-lg">
                <th className="py-4 px-6 flex">
                  Apple <span className="ml-1 text-gray-500">AAPL</span>
                </th>
                <td className="font-bold py-4 px-6">$149.28</td>
                <td className="text-green-500 font-semibold py-4 px-6">
                  +1.62%
                </td>
                <td className="py-4 px-6 font-semibold">$2.37T</td>
                <td className="text-right py-4 px-6">
                  <Link to="/stocks/AAPL">
                    <a
                      href="#"
                      className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                    >
                      Trade
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className=" outline-offset-2 text-lg border-b">
                <th className="py-4 px-6 flex">
                  Amazon <span className="ml-1 text-gray-500">AMZN</span>
                </th>
                <td className="font-bold py-4 px-6">$100.62</td>
                <td className="text-green-500 font-semibold py-4 px-6">
                  +4.13%
                </td>
                <td className="py-4 px-6 font-semibold">$1.03T</td>
                <td className="text-right py-4 px-6">
                  <Link to="/stocks/AMZN">
                    <a
                      href="#"
                      className="rounded-md bg-[#2752FF] py-2 px-4 text-white"
                    >
                      Trade
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center mb-5 text-gray-500">
          Sign up now to build your own watchlist & post for free!
        </p>
        <div className="flex justify-center">
          <Link to="/signup" replace>
            <a
              href="#"
              className="rounded-md bg-[#2752FF] py-2 px-4 text-white "
            >
              Sign Up Now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1_CTA;
