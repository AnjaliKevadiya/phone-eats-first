import React from "react";
import "./style.css";
import API from "../utils/API";
import { Button } from "@material-ui/core";
import ImageUpload from "../components/ImageUpload";

const handleUploadImageClick = (e) => {
  e.preventDefault();

  API.createNewPost({
    image: "url",
    restaurant_name: "Mexican",
    rating: 3,
    caption: "Tasty!!",
    number_of_likes: 0,
    username: "Anji",
  })
    .then((res) => {
      console.log("post created ", res);
      window.location.href = "/home";
    })
    .catch((err) => console.log(err));
};

function NewPost() {
  const [file, setFile] = React.useState("");

  const handlerFileUpload = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <div>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleUploadImageClick}
      >
        Upload Image
      </Button> */}

      {file && <img src={URL.createObjectURL(file)} alt={file.name} />}

      <ImageUpload onUpload={handlerFileUpload} />
    </div>
  );
}

export default NewPost;
