const express = require("express");

const mongoose = require("mongoose");
// const routes = require(./routes);
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//routes
app.use(routes);

//Connect to MondoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");