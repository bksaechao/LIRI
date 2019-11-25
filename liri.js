require('dotenv').config();
// Loading required packages
const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const axios = require("axios");
const moment = require("moment");
const spotify = new Spotify(keys.spotify);

//Taking 2 arguments in the node application
//First argument will be the user input()
var userInput = process.argv[2]
var userQuery = process.argv[3]

switch (userInput) {
    case "conert-this":
        concert();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doIt();
        break;
}