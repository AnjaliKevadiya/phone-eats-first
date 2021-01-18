import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Cookies from "universal-cookie";

function Profile() {
  const [userid, setUserid] = useState("");
  const [posts, setPosts] = useState([]);

  // Load all posts
  useEffect(() => {
    const cookies = new Cookies();
    console.log("cookie", cookies.get("userid"));

    if (cookies.get("userid") === undefined) {
      window.location.replace("/signin");
    } else {
      setUserid(cookies.get("userid"));

      loadPosts();
    }
  }, []);

  // Loads all posts and sets them to pots
  function loadPosts() {
    API.getloginUsersAllPosts(userid)
      .then((res) => {
        console.log("posts", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="mt-4">
        <h2>Profile Page</h2>
      </div>
    </div>
  );
}
export default Profile;
