import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function FBShareButton(props) {
  return (
    <FacebookShareButton
      url={"https://phone-eats-first.herokuapp.com/"}
      quote={"Phone Eats First"}
      //   imageURL={props.data.image}
      //   hashtag={props.caption}
    >
      <FacebookIcon size={36} round={true} />
    </FacebookShareButton>
  );
}
