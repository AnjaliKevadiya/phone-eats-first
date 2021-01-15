import React from "react";
import PostCard from "../components/PostCard";
import "./style.css";

function Home() {
  return (
    <div>
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
