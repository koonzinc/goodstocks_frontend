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
                  Bitcoin <span className="ml-1 text-gray-500">BTC</span>
                </th>
                <td className="font-bold py-4 px-6">$38,716.43</td>
                <td className="text-red-500 font-semibold py-4 px-6">
                  -10.82%
                </td>
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
                <td className="text-red-500 font-semibold py-4 px-6">
                  -10.82%
                </td>
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
                <td className="text-red-500 font-semibold py-4 px-6">
                  -10.82%
                </td>
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
                <td className="text-red-500 font-semibold py-4 px-6">
                  -10.82%
                </td>
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
                <td className="text-red-500 font-semibold py-4 px-6">
                  -10.82%
                </td>
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
        <p className="text-center mb-5 text-gray-500">
          Sign up now to build your own watchlist & post for free!
        </p>
        <div className="flex justify-center">
          <Link to='/signup' replace>
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
