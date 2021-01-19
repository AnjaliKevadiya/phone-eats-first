import React, { useEffect, useState } from "react";
import { Button, Container, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ImageUpload from "../components/ImageUpload";
import { Row } from "../components/SignUpForm";
import API from "../utils/API";
import "./style.css";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";

function NewPost() {
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");

  const [file, setFile] = useState("");
  const [restaurantName, setRestaurantName] = useState();
  const [dishName, setDishName] = useState();
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    const cookies = new Cookies();
    console.log("cookie", cookies.get("userid"));

    if (cookies.get("userid") === undefined) {
      window.location.replace("/signin");
    } else {
      setUserid(cookies.get("userid"));
      setUsername(cookies.get("username"));
    }
  }, []);

  const handlerFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCreateNewPostClick = (e) => {
    e.preventDefault();

    if (restaurantName && dishName && ratings && file) {
      console.log("restaurantName is " + restaurantName);
      console.log("dishName is " + dishName);
      console.log("ratings is " + ratings);
      console.log("id is " + userid);
      console.log("username is " + username);

      // convert image in base64
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log("reader ", reader.result);

        //create a new post using post data
        API.createNewPost({
          id: userid,
          image: reader.result,
          restaurant_name: restaurantName,
          rating: ratings,
          caption: dishName,
          username: username,
        })
          .then((res) => {
            console.log("post created ", res);
            window.location.href = "/home";
          })
          .catch((err) => console.log(err));
      };
    } else {
      console.log("Please fill out the info");
    }
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <input
          className="form-control"
          type="text"
          placeholder="Restaurant Name"
          name="restaurantName"
          onChange={(e) => setRestaurantName(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Dish Name"
          name="dishName"
          onChange={(e) => setDishName(e.target.value)}
        />

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={ratings}
            onChange={(event, newValue) => {
              setRatings(newValue);
            }}
          />
        </Box>

        {file && <img src={URL.createObjectURL(file)} alt={file.name} />}
        <ImageUpload onUpload={handlerFileUpload} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateNewPostClick}
        >
          Upload Post
        </Button>
      </Container>
    </React.Fragment>
  );
}

export default NewPost;
