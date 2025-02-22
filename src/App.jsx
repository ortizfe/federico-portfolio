import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [artist, setArtist] = useState({});

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/artist");
    console.log(response.data);
    setArtist(response.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>Spotify API</h1>
      <h3>{artist.name}</h3>
      <p>{artist.genres}</p>
    </>
  );
}

export default App;
