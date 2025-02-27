// import { useState, useEffect } from "react";
// import axios from "axios";

// const [artist, setArtist] = useState({});
// const [albums, setAlbums] = useState({});

// const fetchArtist = async () => {
//   const response = await axios.get("http://localhost:8080/artist");
//   setArtist(response.data);
// };

// const fetchAlbums = async () => {
//   const response = await axios.get("http://localhost:8080/artist/albums");
//   setAlbums(response.data);
//   Object.entries(response.data).map((album) => {
//     console.log(album);
//   });
// };

// useEffect(() => {
//   fetchArtist();
//   fetchAlbums();
// }, []);
