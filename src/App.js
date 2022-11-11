import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import AppHome from "./pages/AppHome";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import IndividualStocks from "./pages/IndividualStocks";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
  const [postModal, setPostModal] = useState(false);

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
            element={<AppHome postModal={postModal} handlePost={handlePost} />}
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
