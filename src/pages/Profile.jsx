import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import AppNavbar from "../components/AppNavbar";
import Watchlist from "../components/Watchlist";
import EditProfile from "../components/EditProfile";
import ModalPost from "../components/ModalPost";
import { useParams } from "react-router-dom";
import axios from "../axios";

const Profile = ({
  handlePost,
  postModal,
  watchlistData,
  userId,
  postData,
}) => {
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { userName } = useParams();

  useEffect(() => {
    axios
      .get("user-profile?key=" + userName, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setUserInfo(res.data);
        console.log(userInfo);
      })
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
        <ModalPost
          postData={postData}
          userId={userId}
          postModal={postModal}
          handlePost={handlePost}
        />
      ) : null}
      <div className="md:gap-4 grid md:grid-cols-4 mx-auto max-w-screen-xl grid-cols-1 mt-6">
        <div className="flex flex-col md:h-[400px] shadow-2xl rounded-lg ">
          <img
            className="rounded-tr-lg rounded-tl-lg "
            src={userInfo.banner}
            alt=""
          />
          <div className="flex justify-between items-start px-4 pt-2 h-[90px] ">
            <img
              className="w-[100px] h-[100px] rounded-full relative  bottom-[60px] border-[4px] border-white "
              src={userInfo.profile_photo}
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
            <p className="font-semibold">{userInfo.name}</p>
            <p className="text-gray-800">{`@${userInfo.user_name}`}</p>
            <p className="text-gray-800 py-2 text-sm ">
              {userInfo.bio}
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
        <Post postData={postData} userId={userId} handlePost={handlePost} />
        <Watchlist watchlistData={watchlistData} userId={userId} />
      </div>
    </>
  );
};

export default Profile;
