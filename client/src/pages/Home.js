import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

export default Home;
