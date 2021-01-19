import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  Container,
} from "@material-ui/core";
import ImageUpload from "../components/ImageUpload";
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 25%",
    marginTop: "20px",
    marginBottom: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  caption: {
    paddingTop: "10px",
    paddingBottom: "0px",
  },
  comments: {
    paddingTop: "0px",
    paddingBottom: "10px",
  },
  postButton: {
    // width: "20%",
    margin: "6px",
    float: "right",
  },
  spacing: {
    width: "100%",
    marginBottom: "10px",
  },
}));

function NewPost() {
  const classes = useStyles();

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
    <div>
      <Navbar />

      <Card className={classes.root}>
        <Container maxWidth="sm">
          <CardContent>
            <input
              className="form-control"
              type="text"
              placeholder="Restaurant Name"
              name="restaurantName"
              className={classes.spacing}
              onChange={(e) => setRestaurantName(e.target.value)}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Dish Name"
              name="dishName"
              className={classes.spacing}
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
          </CardContent>

          <CardContent className={classes.caption}>
            <Button
              variant="contained"
              color="primary"
              className={classes.postButton}
              onClick={handleCreateNewPostClick}
            >
              Upload Post
            </Button>
          </CardContent>
        </Container>
      </Card>
    </div>
  );
}

export default NewPost;
