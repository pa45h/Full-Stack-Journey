import React from "react";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import Spinner from "./Spinner";
import NotFoundPage from "./NotFoundPage";
import Post from "./Post";

function Blogs() {
  const { loading, posts } = useContext(BlogContext);

  return (
    <div className="w-full h-full">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <NotFoundPage />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blogs;
