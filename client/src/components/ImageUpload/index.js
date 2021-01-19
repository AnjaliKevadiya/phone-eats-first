import React from "react";

function ImageUpload(props) {
  function handleUpload(event) {
    props.onUpload(event);
  }

  return (
    <div id="upload-box">
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
}
export default ImageUpload;
