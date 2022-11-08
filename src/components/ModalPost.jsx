import React from "react";

const ModalPost = () => {
  return (
    <div className="">
      <div className="flex px-8 py-2 bg-white shadow-xl rounded-lg max-w-fit mx-auto ">
        <div className="px-2 py-1">
          <img
            className="w-12 h-12 rounded-[50%]"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Headline */}
          <div className="w-full outline-none py-2 px-2 flex flex-col">
            <input className="bg-transparent outline-none" type="text" placeholder="Type your headline here..."  />
          </div>
          {/* Content */}
          <div className="w-full outline-none py-2 px-2 flex flex-col">
            <textarea className="bg-transparent outline-none resize-none" name="" id="" cols="30" rows="4" placeholder="What's happening..."></textarea>
          </div>
          {/* Date & Button */}
          <div className="flex pt-2 px-2 justify-between w-[100%]">
            <input type="date" />
            <button className="bg-[#2752FF] text-white px-4 py-1 rounded-md">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
