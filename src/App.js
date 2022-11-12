import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import AppHome from "./pages/AppHome";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import IndividualStocks from "./pages/IndividualStocks";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import axios from "./axios";

function App() {
  const [postModal, setPostModal] = useState(false);
  const [userId, setUserId] = useState(-1);
  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("userToken");
    axios
      .get("validate-token", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserId(res.data.loggedInAs);
        console.log(userId);
      });
    axios
      .get("watchlist", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log(response.data);
        setWatchlistData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePost = () => {
    setPostModal(!postModal);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route
            path="/app-home"
            element={
              <AppHome
                postModal={postModal}
                handlePost={handlePost}
                watchlistData={watchlistData}
                userId={userId}
              />
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/stocks/:stockId" element={<IndividualStocks />} />
          <Route
            path="/profile"
            element={<Profile postModal={postModal} handlePost={handlePost} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
