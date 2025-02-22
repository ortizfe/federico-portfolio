import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [artist, setArtist] = useState({});

  const fetchApi = async () => {
    const response = await axios.post("http://localhost:8080/api");
    setArtist(response.json());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>Spotify API</h1>
      {/*artist.map((data, index) => (
        <div key={index}>{data}</div>
      ))*/}
    </>
  );
}

export default App;
