import React from "react";
import { BlogContext } from "../contexts/BlogContext";
import { useContext } from "react";

function Header() {
  const { setDarkMode } = useContext(BlogContext);

  return (
    <>
      <header className="sticky top-0 bg-gray-300 dark:bg-gray-950 py-4 w-full mx-auto flex justify-around items-center">
        <h1 className="flex items-center text-4xl font-extrabold dark:text-white">
          BLOG
          <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2">
            Context
          </span>
        </h1>
        <button
          className="absolute right-5 h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <svg
            className="fill-violet-700 block dark:hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className="fill-yellow-500 hidden dark:block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <img
          className="absolute left-5 rounded-full border-white/10 border cursor-pointer"
          src="PARTH.jpg"
          width="40"
          loading="lazy"
        ></img>
      </header>
    </>
  );
}

export default Header;
