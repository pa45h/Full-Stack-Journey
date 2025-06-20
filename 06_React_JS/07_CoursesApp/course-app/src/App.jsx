import "./index.css";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./components/Loader";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCourses(data.data);
    } catch (error) {
      toast.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-blue-200 relative">
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      <div className="w-11/12 max-w-[1080px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Loader /> : <Cards courses={courses} category={category} filterData={filterData} />}
      </div>
    </div>
  );
}

export default App;
