import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import Navbar from "../src/components/common/Navbar";
import Login from "./pages/Login.page";
import Signup from "./pages/Signup.page";
import ForgotPassword from "./pages/ForgotPassword.page";

function App() {
  return (
    <div className="App w-screen min-h-screen bg-richblack-900 flex flex-col font-inter text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
