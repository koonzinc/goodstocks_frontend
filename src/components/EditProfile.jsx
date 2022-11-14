import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "../axios";

const EditProfile = ({ handleModal, userId }) => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [bio, setBio] = useState();

  let token = localStorage.getItem("userToken");
  const handleEdit = (e) => {
    e.preventDefault();
    axios.put(
      "profile-changes",
      {
        userId: userId,
        name: name,
        user_name: userName,
        bio: bio,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };

  return (
    <div className="absolute h-[100vh] w-[100vw] bg-[#242e3697] z-50 ">
      <div className="absolute bg-transparent p-4 w-full max-w-2xl h-full md:h-auto mx-auto mt-[100px] z-50 left-0 right-0">
        <div className="relative p-4 bg-white rounded-lg shadow  sm:p-5 ">
          <div className=" flex justify-end">
            <button>
              <CloseIcon onClick={handleModal} />
            </button>
          </div>
          <form action="#" onSubmit={handleEdit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Your name"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Your name"
                  required=""
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900  resize-none"
                >
                  Bio
                </label>
                <textarea
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 resize-none "
                  placeholder="Write your bio here..."
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-[#2752ff] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Change Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
