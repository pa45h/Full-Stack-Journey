import { createContext, useState } from "react";

export const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

  async function fetchBlogPage(page = 1) {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPage(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    fetchBlogPage,
    handlePageChange,
    darkMode,
    setDarkMode,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
