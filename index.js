// import the pets array from data.js
const pets = require("./data");
// init express app
const express = require("express");
const app = express();
const PORT = 8080;

// GET - / - returns homepage
//GET - client homepage - '/'
app.get("/", (req, res) => {
  // serve up the public folder as static index.html file
  res.sendFile(__dirname + "/public/index.html");
});

// hello world route
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// get all pets from the database
//GET - all pets - '/api/v1/pets'
app.get("/api/v1/pets", (req, res) => {
  // send the pets array as a response
  res.send(pets);
});

// get pet by owner with query string
//GET - pet by owner name - '/api/v1/pets/owner'
app.get("/api/v1/pets/owner", (req, res) => {
  // get the owner from the request
  const owner = req.query.owner;
  console.log(req.query);
  // find the pet in the pets array
  const pet = pets.find((pet) => pet.owner === owner);
  // send the pet as a response
  res.send(pet);
});

// get pet by name
//GET - pet by id - '/api/v1/pets/:name'
app.get("/api/v1/pets/:name", (req, res) => {
  // get the name from the request
  //res.send( pets )
  // find the pet in the pets array
  // const pet = pets.find(pet => pet.name === name);
  const pet = pets.find((pet) => pet.name === req.params.name);
  // send the pet as a response
  res.send(pet);
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

module.exports = app;
