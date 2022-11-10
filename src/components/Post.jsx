import React, { useState } from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";


const Post = ({ handlePost }) => {
  return (
    <>
      <div className="bg-white px-6 py-4 shadow-2xl rounded-lg flex flex-col col-span-2 ">
        {/* Post header */}
        <div className="bg-[#2752FF] px-4 py-6 flex justify-between items-center rounded-lg text-white shadow-md ">
          <h1 className="text-2xl font-semibold">Posts</h1>
          <HistoryEduIcon
            onClick={handlePost}
            className="cursor-pointer"
            fontSize="large"
          />
        </div>
        {/* Posts container */}
        <div className="bg-white shadow-lg rounded-lg px-4 py-6 mt-6">
          {/* Row 1 */}
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-[50%]"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
            <div className="flex flex-col ml-2">
              <p className="font-semibold">William Koonz</p>
              <p className="text-xs text-gray-500">@williamkoonz</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col mt-4">
            <h1 className="font-semibold text-lg">This is a headline</h1>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et error
              excepturi earum dicta facilis numquam, quasi veritatis omnis totam
              aliquid! Laborum ad, odio ipsa nulla nostrum quod voluptatum fugit
              placeat.
            </p>
          </div>
        </div>
        {/* Posts container */}
        <div className="bg-white shadow-lg rounded-lg px-4 py-6 mt-6">
          {/* Row 1 */}
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-[50%]"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
            <div className="flex flex-col ml-2">
              <p className="font-semibold">William Koonz</p>
              <p className="text-xs text-gray-500">@williamkoonz</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col mt-4">
            <h1 className="font-semibold text-lg">This is a headline</h1>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et error
              excepturi earum dicta facilis numquam, quasi veritatis omnis totam
              aliquid! Laborum ad, odio ipsa nulla nostrum quod voluptatum fugit
              placeat.
            </p>
          </div>
        </div>
        {/* Posts container */}
        <div className="bg-white shadow-lg rounded-lg px-4 py-6 mt-6">
          {/* Row 1 */}
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-[50%]"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
            <div className="flex flex-col ml-2">
              <p className="font-semibold">William Koonz</p>
              <p className="text-xs text-gray-500">@williamkoonz</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col mt-4">
            <h1 className="font-semibold text-lg">This is a headline</h1>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et error
              excepturi earum dicta facilis numquam, quasi veritatis omnis totam
              aliquid! Laborum ad, odio ipsa nulla nostrum quod voluptatum fugit
              placeat.
            </p>
          </div>
        </div>
        {/* Posts container */}
        <div className="bg-white shadow-lg rounded-lg px-4 py-6 mt-6">
          {/* Row 1 */}
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-[50%]"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
            <div className="flex flex-col ml-2">
              <p className="font-semibold">William Koonz</p>
              <p className="text-xs text-gray-500">@williamkoonz</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col mt-4">
            <h1 className="font-semibold text-lg">This is a headline</h1>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et error
              excepturi earum dicta facilis numquam, quasi veritatis omnis totam
              aliquid! Laborum ad, odio ipsa nulla nostrum quod voluptatum fugit
              placeat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
