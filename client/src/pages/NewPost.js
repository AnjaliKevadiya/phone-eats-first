import React from "react";
import "./style.css";
import API from "../utils/API";
import { Button } from "@material-ui/core";

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
  return <FileUpload />;
}

export default NewPost;

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  return (
    <div id="upload-box">
      <Button
        variant="contained"
        color="primary"
        onClick={handleUploadImageClick}
      >
        Upload Image
      </Button>

      <input type="file" accept="image/*" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      {file && <ImageThumb image={file} />}
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};
