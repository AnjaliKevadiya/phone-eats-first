import React from "react";
import "./style.css";
import API from "../utils/API";
import { Button, Container } from "@material-ui/core";
import ImageUpload from "../components/ImageUpload";

function NewPost() {
  const [file, setFile] = React.useState("");

  const handlerFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCreateNewPostClick = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("reader ", reader.result);

      //create a new post
      API.createNewPost({
        image: reader.result,
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
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateNewPostClick}
          >
            Upload Image
          </Button>

          {file && <img src={URL.createObjectURL(file)} alt={file.name} />}

          <ImageUpload onUpload={handlerFileUpload} />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default NewPost;
