import React from "react";
import Ratings from "../ReadOnlyRatings";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";

import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    margin: "0 25%",
    marginBottom: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[(500, 400, 300)],
  },
  caption: {
    paddingTop: "10px",
    paddingBottom: "0px",
  },
  comments: {
    paddingTop: "0px",
    paddingBottom: "10px",
  },
  addComment: {
    padding: "1px",
    width: "88%",
  },
  sendButton: {
    width: "10%",
    margin: "6px",
    float: "right",
  },
  actionButtons: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
}));

// PostList renders a
export function PostList({ children }) {
  return <div className="postCard"> {children} </div>;
}

// PostListItem renders a item containing data from the posts api call
export function PostListItem({
  username,
  image,
  restaurant_name,
  rating,
  caption,
  number_of_likes,
}) {
  const classes = useStyles();

  const handleLikeClick = (e) => {
    e.preventDefault();
    alert("Hey");
    // console.log("email is " + email);
    // console.log("password is " + password);
    // API.login({
    //   email: email,
    //   password: password,
    // })
    //   .then((res) => {
    //     console.log("login response ", res);
    //     window.location.href = "/home";
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {username[0]}
          </Avatar>
        }
        action={<Ratings ratingValue={rating} />}
        title={username}
        subheader={restaurant_name}
      />
      <CardMedia className={classes.media} image={image} title={caption} />
      <CardContent className={classes.caption}>
        <Typography variant="body3" color="textSecondary" component="h6">
          {caption}
        </Typography>
      </CardContent>

      <CardActions className={classes.actionButtons} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={handleLikeClick} />
        </IconButton>

        <Typography variant="body3" color="textSecondary" component="h6">
          {number_of_likes} likes
        </Typography>

        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

      <CardContent className={classes.comments}>
        <Typography
          className={classes.comments}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {"It was delicious!!"}
        </Typography>

        {/* <form noValidate> */}
        <TextField
          className={classes.addComment}
          id="filled-textarea"
          placeholder="Add Comment"
          multiline
          variant="outlined"
        />
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.sendButton}
        >
          Send
        </Button>

        {/* </form> */}
      </CardContent>
    </Card>
  );
}
