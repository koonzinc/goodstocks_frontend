import React from "react";
import { Link } from "react-router-dom";

const Section6_CTA = () => {
  return (
    <section class="bg-white ">
      <div class="py-8 px-4 mx-auto max-w-[70%] bg-white rounded-lg shadow-2xl mb-20 sm:py-16 lg:px-6">
        <div class="max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Let's look at some good stocks.
          </h2>
          <p class="mb-8 font-light text-gray-500 sm:text-xl ">
            Goodstocks allows you to connect with other likeminded investors &
            share your thoughts about potential movements in the market.
            Connecting with other is as easy as creating an account and posting
            your first thought!
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link to="/app-home" replace>
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900  bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
              >
                Enter app
              </a>
            </Link>
            <Link to="/signup" replace>
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
              >
                <svg
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Create account
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6_CTA;
