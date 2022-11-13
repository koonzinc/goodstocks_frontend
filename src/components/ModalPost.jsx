import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import axios from "../axios";

const ModalPost = ({ postModal, handlePost, userId }) => {
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  let token = localStorage.getItem("userToken");
  const sendPost = (e) => {
    e.preventDefault();
    axios.post(
      "posts",
      {
        user_id: userId,
        headline: headline,
        content: content,
        date_stamp: date,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };
  // console.log(userId)
  // console.log(headline)
  // console.log(content)
  // console.log(date)
  return (
    <div className="absolute z-40 h-full w-full bg-[#242e3697]">
      <div className="absolute z-50 top-0 left-0 mt-[300px] right-0 flex px-8 py-2 bg-white shadow-xl rounded-lg max-w-fit mx-auto ">
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
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Type your headline here..."
              onChange={(e) => setHeadline(e.target.value)}
            />
          </div>
          {/* Content */}
          <div className="w-full outline-none py-2 px-2 flex flex-col">
            <textarea
              className="bg-transparent outline-none resize-none"
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="What's happening..."
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          {/* Date & Button */}
          <div className="flex pt-2 px-2 justify-between w-[100%]">
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <button
              onClick={sendPost}
              className="bg-[#2752FF] text-white px-4 py-1 rounded-md"
            >
              Post
            </button>
          </div>
          <CloseIcon
            onClick={handlePost}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
