import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/FrontPage/Navbar";
import axios from "../axios";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post("reset-password", {
        email: email,
      })
      .then((res) => setEmailSent(true))
      .catch((err) => console.log("Error", err));
  };
  const handleCode = (e) => {
    e.preventDefault();
    axios
      .post("verify-code", {
        password_code: code,
      })
      .then((res) => setCodeVerified(true))
      .catch((err) => console.log("Error", err));
  };
  const handlePassword = (e) => {
    e.preventDefault();
    axios
      .put("change-password", {
        password_code: code,
        email: email,
        password: newPassword,
      })
      .then((res) => navigate("/signin"))
      .catch((err) => console.log("Error", err));
  };

  return (
    <>
      <Navbar />
      <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-[#2752ff] "
          >
            goodstocks
          </a>
          <div class="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md  sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Change Password
            </h2>

            <form
              onSubmit={handleEmail}
              class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>
            {emailSent && (
              <form onSubmit={handleCode}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    code
                  </label>
                  <input
                    type="text"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="code"
                    required
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </form>
            )}
            {codeVerified && (
              <form onSubmit={handlePassword}>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    New Password
                  </label>
                  <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
              </form>
            )}

            <button
              type="submit"
              class="w-full text-white bg-[#2752FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Reset password
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
