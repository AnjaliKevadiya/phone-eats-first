import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginRight: theme.spacing(5),
      float: "right",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function NewPostButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="add" href="/newpost">
        <AddIcon className={classes.extendedIcon} />
        New Post
      </Fab>
    </div>
  );
}

export default NewPostButton;
