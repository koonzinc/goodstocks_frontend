import React from "react";

const SocialProof = () => {
  return (
    <section class="bg-white  ">
      <div class="max-w-[70%] px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 bg-white rounded-lg shadow-2xl mb-20 ">
        <dl class="grid max-w-screen-md gap-8 mx-auto  sm:grid-cols-3 ">
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-[#2752FF]">73M+</dt>
            <dd class="font-light text-gray-500 ">developers</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-[#2752FF]">1B+</dt>
            <dd class="font-light text-gray-500 ">contributors</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-[#2752FF]">4M+</dt>
            <dd class="font-light text-gray-500 ">organizations</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProof;
