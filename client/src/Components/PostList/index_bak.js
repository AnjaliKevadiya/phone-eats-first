import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ratings from "../ReadOnlyRatings";
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
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
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

function PostCard(props) {
  console.log("props ", props.data);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={<Ratings />}
        title={props.username}
        subheader="Burger King"
      />
      <CardMedia
        className={classes.media}
        image="https://pbs.twimg.com/profile_images/572395168905457664/lCtqj0ak.jpeg"
        title="Paella dish"
      />
      <CardContent className={classes.caption}>
        <Typography variant="body3" color="textSecondary" component="h6">
          {"It was delicious!!"}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionButtons} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <Typography variant="body3" color="textSecondary" component="h6">
            {" 10 "}likes
          </Typography>
        </IconButton>
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

export default PostCard;
