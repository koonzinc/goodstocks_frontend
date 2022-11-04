import React from "react";

const SocialProof = () => {
  return (
    <section class="bg-white  ">
      <div class="max-w-[70%] px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 bg-white rounded-lg shadow-2xl mb-20 ">
        <dl class="grid max-w-screen-md gap-8 mx-auto  sm:grid-cols-3 ">
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-[#2752FF]">
              5
            </dt>
            <dd class="font-light text-gray-500 ">Stocks</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-[#2752FF]">
              ∞
            </dt>
            <dd class="font-light text-gray-500 ">Posts</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-[#2752FF]">
              3
            </dt>
            <dd class="font-light text-gray-500 ">Indices</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProof;
