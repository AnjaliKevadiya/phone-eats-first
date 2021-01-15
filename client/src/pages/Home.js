import React from "react";
import PostCard from "../components/PostCard";
import "./style.css";
import NewPostButton from "../components/NewPostButton";

function Home() {
  return (
    <div>
      <NewPostButton />
      <div className="postCard">
        <PostCard />
      </div>
      <div className="postCard">
        <PostCard />
      </div>
      <div className="postCard">
        <PostCard />
      </div>
    </div>
  );
}

export default Home;
