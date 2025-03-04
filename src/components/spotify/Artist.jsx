import { Link } from "@heroui/react";
import { useState, useEffect } from "react";

const Artist = () => {
  const [artist, setArtist] = useState("");
  const [artistUrl, setArtistUrl] = useState("");
  const [popularity, setPopularity] = useState("");
  const [followers, setFollowers] = useState("");

  const spotify_baseurl = "https://express-backend-api-one.vercel.app/";

  useEffect(() => {
    const getArtist = async () => {
      let artistResponse = "";

      try {
        const response = await fetch(`${spotify_baseurl}spotify/artist`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        artistResponse = await response.json();
      } catch (error) {
        console.error(error.message);
      }

      setArtist(artistResponse.name);
      setFollowers(artistResponse.followers.total);
      setPopularity(artistResponse.popularity);
      setArtistUrl(artistResponse.external_urls.spotify);
    };

    getArtist();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold">Spotify Artist Name</h1>
        <p>{artist}</p>
      </div>
      <div>
        <h1 className="font-bold">Followers</h1>
        <p>{followers}</p>
      </div>
      <div>
        <h1 className="font-bold">Popularity</h1>
        <p>{popularity}</p>
      </div>
      <div>
        <h1 className="font-bold">Find them on Spotify</h1>
        <Link isExternal href={artistUrl}>
          Visit
        </Link>
      </div>
    </div>
  );
};

export default Artist;
