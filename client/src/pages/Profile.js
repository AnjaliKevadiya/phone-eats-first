import React, { useState, useEffect, useMemo } from "react";
import { Grid, Typography, CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";
const useStyles = makeStyles((theme) => ({
  grid: {
    width: "95%",
    margin: "20px",
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
  },
  postItem: {
    width: "300px",
    height: "200px",
  },
}));

function Profile() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const classes = useStyles();
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
  const toRenderPosts = useMemo(() => {
    return posts.map((post) => {
      return (
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia className={classes.postItem} component="img" alt="placeholder" image={post.image} />
          </CardActionArea>
        </Grid>
      );
    });
  }, [posts]);
  // Loads all posts and sets them to pots
  function loadPosts(uid) {
    console.log("userid userid", uid);
    API.getloginUsersAllPosts(uid)
      .then((res) => {
        console.log("posts", res.data);
        setUser(res.data);
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Navbar />
      {/* <Typography variant="body2" color="textSecondary" component="p">
        {user.first_name} {user.last_name}
      </Typography> */}
      <Grid container className={classes.grid} spacing={8} justify="center">
        {toRenderPosts}
      </Grid>
    </div>
  );
}
export default Profile;