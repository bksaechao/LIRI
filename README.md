# LIRI
<p>LIRI is a SIRI inspired bot that pulls data from multiple libraries and provides it to the user based on their command and input. While SIRI interprets voice commands, LIRI interprets text provided by the user in the node terminal. Unfortunately since this is a command line application it cannot be easily shared for other users.</p>
<img src="images/liriIntro.gif" alt="liriGif" height="200" width="400">

# How to use it
*<strong>Pre-steps</strong>*
*<p>(since this app uses the node-spotify-api, users must sign up for their own spotify account and developer account (two separate accounts) and input the developer credentials in a hidden .env file. The steps are listed below)</p>*
<ol>
  <li>Visit https://developer.spotify.com/my-applications/#!/
  <li>Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
  <li>Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
  <li>On the next screen, scroll down to where you see your client id and client secret. 
  <li>You will then need to create your own .env file within the application and include your developer credentials. replace asterisks in the image below with your own credentials.
</ol>
<img src="images/envfile.png" alt="env" height="200" width="350">
