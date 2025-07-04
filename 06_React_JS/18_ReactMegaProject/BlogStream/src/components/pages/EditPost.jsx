import React, { useEffect, useState } from "react";
import { Container, PostCard, PostForm } from "../index.js";
import service from "../../appwrite/db.js";
import { useNavigate, useParams } from "react-router";

function EditPost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post}></PostForm>
      </Container>
    </div>
  ) : null;
}

export default EditPost;
