import React, { useState } from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const Post = ({ postModal, handlePost, postData }) => {
  return (
    <>
      <div className="bg-white px-6 py-4 shadow-2xl rounded-lg flex flex-col col-span-2 ">
        {/* Post header */}
        <div className="bg-[#2752FF] px-4 py-6 flex justify-between items-center rounded-lg text-white shadow-xl">
          <h1 className="text-2xl font-semibold">Posts</h1>
          <HistoryEduIcon
            onClick={handlePost}
            className="cursor-pointer"
            fontSize="large"
          />
        </div>
        {/* Posts container */}
        {postData.map((post, i) => (
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
            <div className="flex flex-col my-4">
              <h1 className="font-semibold text-lg">{postData[i].headline}</h1>
              <p className="text-gray-700 text-sm">
               {postData[i].content}
              </p>
            </div>
            {/* Row 3 */}
            <div>
              <h2 className="text-xs font-semibold">{postData[i].date_stamp}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
