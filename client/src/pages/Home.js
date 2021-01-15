import React from "react";
import Post from "../components/Post";
import "./style.css";

function Home() {
  return (
    <div>
      <div className="postCard">
        <Post />
      </div>
      <div className="postCard">
        <Post />
      </div>
      <div className="postCard">
        <Post />
      </div>
    </div>
  );
}

export default Home;
