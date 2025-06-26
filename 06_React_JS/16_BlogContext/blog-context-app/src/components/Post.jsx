import React from "react";

function Post({ post }) {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="p-4 mx-auto max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800/50 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article On {post.category}
                </span>
                <span className="text-sm">Posted On {post.date}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400 text-lg">
                {post.content}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 mx-1">
                  <img
                    className="w-8 rounded-full"
                    src="PARTH.jpg"
                    loading="lazy"
                  />
                  <span className="font-medium dark:text-white">
                    {post.author}
                  </span>
                </div>
                <span className="text-primary-500 text-sm mx-1 text-wrap">
                  {post.tags.map((tag, index) => (
                    <a key={index} href="#">{` #${tag.replaceAll(" ", "") }`}</a>
                  ))}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Post;
