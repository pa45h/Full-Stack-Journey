import React, { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

function Pagination() {
  let { page, totalPages, handlePageChange } = useContext(BlogContext);

  return (
    <>
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center gap-8 px-10 pb-2 rounded-2xl mb-2 bg-gray-400/90 dark:bg-gray-950/90">
        <div className=" relative flex mt-2 justify-center items-center xs:mt-0 gap-4 w-[320px] h-11">
          {page > 1 && (
            <button
              className="absolute left-0 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s-xl border-0 border-e hover:bg-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
              onClick={() => handlePageChange(page - 1)}
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Prev
            </button>
          )}
          <span className="text-gray-700 dark:text-gray-400 text-md">
            Page
            <span className="font-semibold text-gray-900 dark:text-white">
              {` ${page} `}
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              {` ${totalPages} `}
            </span>
          </span>
          {page < totalPages && (
            <button
              className="absolute right-0 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s rounded-e-xl hover:bg-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          )}
        </div>
      </footer>
    </>
  );
}

export default Pagination;
