import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    setPosts(response.data);
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </article>
      ))}
    </div>
  );
};

export default PostList;
