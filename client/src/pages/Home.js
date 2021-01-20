import React, { useState, useEffect } from "react";
import { PostList, PostListItem } from "../components/PostList";
import "./style.css";
import NewPostButton from "../components/NewPostButton";
import API from "../utils/API";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";

function Home() {
  function init() {
    //make sure the user is logged in
    API.checkUserLoginOrNot().then((userData) => {
      console.log(userData.data);
      if (userData.data.email === undefined) {
        window.location.replace("/signin");
      } else {
        console.log("You're logged in!");
        const cookies = new Cookies();
        // set user id in cookie
        cookies.set("userid", userData.data._id, { path: "/" });

        //set username in cookie
        cookies.set(
          "username",
          userData.data.first_name + " " + userData.data.last_name,
          { path: "/" }
        );
      }
    });
  }

  init();

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
      <Navbar />
      <NewPostButton />

      {!posts.length ? (
        <p className="text-center">No Posts to Display</p>
      ) : (
        <PostList>
          {posts.map((post) => {
            return (
              <PostListItem
                id={post._id}
                key={post.username}
                image={post.image}
                restaurant_name={post.restaurant_name}
                rating={post.rating}
                caption={post.caption}
                number_of_likes={post.number_of_likes}
                username={post.username}
                comments={post.comments}
              />
            );
          })}
        </PostList>
      )}
    </div>
  );
}

export default Home;
