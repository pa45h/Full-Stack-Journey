import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { BlogContext } from "./contexts/BlogContext";
import { useEffect, useContext } from "react";

function App() {
  const { fetchBlogPage, page, darkMode } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogPage(page);
  }, []);

  if (darkMode) {
    document.querySelector("html").classList.add("dark");
    document.querySelector("html").classList.remove("light");
  } else {
    document.querySelector("html").classList.add("light");
    document.querySelector("html").classList.remove("dark");
  }

  return (
    <div className="dark:bg-gray-900 w-screen h-screen overflow-x-hidden relative">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
