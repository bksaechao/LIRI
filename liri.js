require('dotenv').config();
// Loading required packages.
const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");

// Taking 2 arguments in the node application.
// First argument will be the command(i.e "concert-this" "spotify-this-song" etc..).
// Second argument will be the specified content being queried.
var command = process.argv[2];
var input = process.argv.slice(3).join(" ")

// Switch statement to handle commands.

switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doThis();
        break;
}

function concertThis() {
    var artist = input;
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(response => {
        console.log("Venu: " + response.data[0].venue.name + "\n");
        console.log("Location: " + response.data[0].venue.city + "\n");
        console.log("Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n");

        var logConcert = "======Concert Start======" + "\nArtist: " + artist + "\nVenue: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.city + "\n Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n======Concert End======" + "\n";
        fs.appendFile("log.txt", logConcert, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Concert Logged")
            }
        })
    }).catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
};

function spotifyThis() {
    console.log('hello');
};

function movieThis() {

}

function doThis() {

}