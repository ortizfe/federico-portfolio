import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
dotenv.configDotenv();
import express from "express";
const app = express();
const port = 8080;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const access_token_header = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

// app.options("*", cors());

const access_token = await axios.post(
  "https://accounts.spotify.com/api/token",
  `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  access_token_header
);

const auth_header = {
  headers: {
    Authorization: `Bearer ${access_token.data.access_token}`,
  },
};

app.get("/artist", async (req, res) => {
  const artist = await axios.get(
    "https://api.spotify.com/v1/artists/1btWGBz4Uu1HozTwb2Lm8A",
    auth_header
  );
  res.json(artist.data);
});

app.listen(port, () => {
  console.log("Example app listening on port 8080");
});
