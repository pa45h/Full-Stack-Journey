import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import Navbar from "../src/components/common/Navbar";

function App() {
  return (
    <div className="App w-screen min-h-screen bg-richblack-900 flex flex-col font-inter text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
