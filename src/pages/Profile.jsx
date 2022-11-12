import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import AppNavbar from "../components/AppNavbar";
import Watchlist from "../components/Watchlist";
import EditProfile from "../components/EditProfile";
import ModalPost from "../components/ModalPost";
import { useParams } from "react-router-dom";
import axios from "../axios";

const Profile = ({ handlePost, postModal, watchlistData, userId }) => {
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { userName } = useParams();

  useEffect(() => {
    axios
      .get("user-profile?key=" + userName, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <AppNavbar handlePost={handlePost} />
      {modal ? <EditProfile handleModal={handleModal} /> : null}
      {postModal ? (
        <ModalPost postModal={postModal} handlePost={handlePost} />
      ) : null}
      <div className="md:gap-4 grid md:grid-cols-4 mx-auto max-w-screen-xl grid-cols-1 mt-6">
        <div className="flex flex-col md:h-[400px] shadow-2xl rounded-lg ">
          <img
            className="rounded-tr-lg rounded-tl-lg "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHWAH7thVcIBNCzQE4jfYH6sZVrtHFcqSFOwN7gZpVQ&s"
            alt=""
          />
          <div className="flex justify-between items-start px-4 pt-2 h-[90px] ">
            <img
              className="w-[100px] h-[100px] rounded-full relative  bottom-[60px] border-[4px] border-white "
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <button
              onClick={handleModal}
              className="bg-[#2752ff] text-white px-2.5 py-1 rounded-2xl cursor-pointer"
            >
              Edit profile
            </button>
          </div>
          <div className="px-4 mt-[-15px] ">
            <p className="font-semibold">Isaiah Desta</p>
            <p className="text-gray-800">@areandd</p>
            <p className="text-gray-800 py-2 text-sm ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              est. Lorem ipsum dolor sit amet.
            </p>
            <div className="flex ">
              <p>
                <span className="font-semibold">61</span> Following
              </p>
              <p>
                <span className="font-semibold ml-3">121</span> Followers
              </p>
            </div>
          </div>
        </div>
        <Post handlePost={handlePost} />
        <Watchlist watchlistData={watchlistData} userId={userId} />
      </div>
    </>
  );
};

export default Profile;
