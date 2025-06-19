import "./index.css";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCourses(data.data);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
