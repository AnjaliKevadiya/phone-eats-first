import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import "./style.css";
import NewPostButton from "../components/NewPostButton";
import API from "../utils/API";

function Home() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([]);

  // Load all posts and store them with setPosts
  useEffect(() => {
    loadPosts();
  }, []);

  // Loads all posts and sets them to pots
  function loadPosts() {
    API.getAllPosts()
      .then((res) => {
        console.log("posts", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <NewPostButton />
      {posts.length ? (
        <div className="postCard">
          <PostCard />
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Home;
