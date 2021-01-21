const express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(routes);

//Connect to MondoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/phone-eats-first",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
//Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
