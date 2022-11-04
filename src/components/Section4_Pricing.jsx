import React from "react";

const Section4_Pricing = () => {
  return (
    <section class="bg-white ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Designed for a very particular investor
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl ">
            Have you been scowering the internet in search for a website that
            only displays 5 stocks with limited data? Look no further,
            goodstocks is what you need.
          </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
            <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
            <p class="font-light text-gray-500 sm:text-lg ">
              Best option for personal use for your next investment.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">Free</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Your own profile</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size: <span class="font-semibold">1 user</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support: <span class="font-semibold">Forever</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span class="font-semibold">Never</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-[#2752FF] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Get started
            </a>
          </div>
          {/* <!-- Pricing Card --> */}
        </div>
      </div>
    </section>
  );
};

export default Section4_Pricing;
