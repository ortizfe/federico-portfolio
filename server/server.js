import express from "express";
import { Router } from "express";

import SpotifyWebApi from "spotify-web-api-node";

import { config } from "dotenv";
config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_CALLBACK,
});

app.listen(8080, () => {
  console.log("Server has started on port 8080");
});
