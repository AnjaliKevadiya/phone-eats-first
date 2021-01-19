import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";

function Profile() {
  const [posts, setPosts] = useState([]);

  // Load all posts
  useEffect(() => {
    const cookies = new Cookies();
    console.log("cookie", cookies.get("userid"));

    if (cookies.get("userid") === undefined) {
      window.location.replace("/signin");
    } else {
      loadPosts(cookies.get("userid"));
    }
  }, []);

  // Loads all posts and sets them to pots
  function loadPosts(uid) {
    console.log("userid userid", uid);

    API.getloginUsersAllPosts(uid)
      .then((res) => {
        console.log("posts", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <div className="mt-4">
        <h2>Profile Page</h2>
      </div>
    </div>
  );
}
export default Profile;
