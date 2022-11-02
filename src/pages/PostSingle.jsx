import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostSingle = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(response.data);
    setStatus(true);
  };

  return (
    <>
      {status ? (
        <div>
          <h1>{post.title}</h1> <div>{post.body}</div>
        </div>
      ) : (
        <h1>Load....</h1>
      )}
    </>
  );
};

export default PostSingle;
