import React, { useState, useEffect, useMemo } from "react";
import { Grid, Typography, CardActionArea, CardMedia, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";


const useStyles = makeStyles((theme) => ({
  grid: {
    width: "95%",
    margin: "20px",
  },
  postItem: {
    width: "300px",
    height: "200px",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
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
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="placeholder"
                image={post.image}
              />
              <CardContent justify="center">
              <Typography gutterBottom variant="h5" component="h2" >
                {`${post.restaurant_name}`}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2" >
                {`${post.caption}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      );
    });
  }, [posts]);

  const toRenderUserInfo = useMemo(() => {
    if (user === undefined) {
      return;
    } else {
      return (
        <Grid>
        <Typography variant="h3"  component="p" textAllign="right">
          {`${user.first_name} ${user.last_name}'s Profile`}
        </Typography>
        </Grid>
        
      );
    }
  }, [user]);

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
      {toRenderUserInfo}
      <Grid container className={classes.grid} spacing={8} justify="center">
        {toRenderPosts}
      </Grid>
    </div>
  );
}
export default Profile;
