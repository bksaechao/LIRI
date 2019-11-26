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
// Second argument will be the input(i.e "artist" "song title" "movie title" etc..).
var command = process.argv[2];
// Extracts a copy of the third array element and concatenates higher index arguments.
// This accounts for multiple spaced arguments.
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
    // Grabbing data from the bandsintown api and displaying it on the node terminal.
    axios.get(queryURL).then(response => {
        console.log("Venu: " + response.data[0].venue.name + "\n");
        console.log("Location: " + response.data[0].venue.city + "\n");
        console.log("Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n");

        // Logging concert data to the log file.
        var logConcert =
            "======Concert Start======" +
            "\nArtist(s): " + artist +
            "\nVenue: " + response.data[0].venue.name +
            "\nLocation: " + response.data[0].venue.city +
            "\n Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") +
            "\n======Concert End======" + "\n\n";

        fs.appendFile("log.txt", logConcert, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Concert Logged")
            }
        })
    }).catch(error => {
        if (error) {
            console.log(error);
        }
    });
};

function spotifyThis() {
    // Defaults input to "The Sign."
    if (!input) {
        input = "The Sign"
    };
    // Grabbing data from the spotify api and displaying it on the node terminal
    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log("Error: " + err);
        }
        console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name + "\n");
        console.log("Song Title: " + data.tracks.items[0].name + "\n");
        console.log("Preview Link: " + data.tracks.items[0].href + "\n");
        console.log("Album: " + data.tracks.items[0].album.name + "\n");

        // Logging spotify data to the log file.
        var logSpotify =
            "======Spotify Start======" +
            "\nArtist(s): " + data.tracks.items[0].album.artists[0].name +
            "\nSong Title: " + data.tracks.items[0].name +
            "\nPreview Link: " + data.tracks.items[0].href +
            "\nAlbum: " + data.tracks.items[0].album.name +
            "\n======Spotify End======" + "\n\n";

        fs.appendFile("log.txt", logSpotify, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Spotify Logged");
            }
        })
    })
}

function movieThis() {
    var movieName = input
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // Defaults input to "Mr. Nobody."
    if (!movieName) {
        movieName = "Mr. Nobody"
    };

    // Grabbing data from OMDB API and displaying it on the node terminal
    axios.get(queryURL).then(response => {
        console.log("Title: " + response.data.Title + "\n");
        console.log("Release Year: " + response.data.Year + "\n");
        console.log("IMDB Rating: " + response.data.imdbRating + "\n");
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n");
        console.log("Country Produced: " + response.data.Country + "\n");
        console.log("Language: " + response.data.Language + "\n");
        console.log("Plot: " + response.data.Plot + "\n");
        console.log("Actors: " + response.data.Actors + "\n");

        // Logging movie data
        var logMovie =
            "======Movie Start======" +
            "\nTitle: " + response.data.Title +
            "\nRelease Year: " + response.data.Year +
            "\nIMDB Rating: " + response.data.imdbRating +
            "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
            "\nCountry Produced: " + response.data.Country +
            "\nLanguage: " + response.data.Language +
            "\nPlot: " + response.data.Plot +
            "\nActors: " + response.data.Actors +
            "\n======Movie End======" + "\n\n";

        fs.appendFile("log.txt", logMovie, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Movie Logged")
            }
        })
    }).catch(error => {
        if (error) {
            console.log(error);
        }
    });
}

function doThis() {

}