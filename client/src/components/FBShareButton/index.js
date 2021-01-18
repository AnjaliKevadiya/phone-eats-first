import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "2px",
  },
  //   socialMediaButton: {
  //     "&:hover > svg": {
  // height: "50px !important",
  // width: "50px !important",
  //     },
  //   },
}));

export default function FBShareButton(props) {
  const classes = useStyles();

  return (
    <FacebookShareButton
      url={"https://phone-eats-first.herokuapp.com/"}
      quote={"Phone Eats First"}
      //   hashtag="#Testing"
      // className={classes.root}
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}
