import React from "react";
// import "./style.css";
// import API from "../utils/API";
import { Button } from "@material-ui/core";

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function ImageUpload(props) {
  // State to store uploaded file
  //   const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    // setFile(event.target.files[0]);
    props.onUpload(event);
    // Add code here to upload file to server
    // ...
  }

  return (
    <div id="upload-box">
      <input type="file" accept="image/*" onChange={handleUpload} />
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {/* {file && <img src={URL.createObjectURL(file)} alt={file.name} />} */}
    </div>
  );
}
export default ImageUpload;
