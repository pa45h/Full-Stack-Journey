import React, { useState, useEffect } from "react";
import Service from "../../appwrite/db";
import { Container, PostCard } from "../index";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Service.listPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <button
                className="text-2xl font-bold hover:text-gray-500"
                onClick={() => navigate("/login")}
              >
                Login to read posts
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
