import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import API from "../utils/API";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";



const useStyles = makeStyles((theme) => ({
  grid: {
    width: '95%',
    margin: '20px'
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
  },

}));


function Profile() {
  const [userid, setUserid] = useState("");
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  // Load all posts
  useEffect(() => {
    const cookies = new Cookies();
    console.log("cookie", cookies.get("userid"));

    if (cookies.get("userid") === undefined) {
      window.location.replace("/signin");
    } else {
      setUserid("600628742a02ed41214ffaec"); //cookies.get("userid"));

      loadPosts();
    }
  }, []);

  // Loads all posts and sets them to pots
  function loadPosts() {
    console.log("userid userid", userid);

    API.getloginUsersAllPosts(userid)
      .then((res) => {
        console.log("posts", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <Grid container className={classes.grid} spacing={2} justify="flex-end">
        <Grid item xs={8}>
          <Paper className={classes.paper} >Bio</Paper>
        </Grid>
      </Grid>
      <br></br>
      <br></br>

      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
    </div>
    
  );
}
export default Profile;
