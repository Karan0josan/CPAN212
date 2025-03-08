/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/

// [Please enable only ONE of these]
import express from "express"; // if you are using type: module
//const express = require("express"); // if using common JS (Default)
import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js";
const app = express();
const PORT = process.env.PORT || 8000;

// middlelware
//Don't need this for now
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// routes

app.use(logger);
//app.use runs for every route. This is application wide, so it runs everywhere
app.get("/", logger, (req, res) => { //using it in the route
  res.send("Welcome to our server");
});

app.get("/about", (req, res) => {
  res.send("Welcome to our about page");
});
app.get("/login", (req, res) => {
  res.send("We have received your request - login");
});

app.get("/login", (req, res) => {
  res.send("We stole your information");
});
app.get("/fetchData", auth, (req, res) => {
  res.send("Hi Karan, here is your profile data");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//This is like a catch all route
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
