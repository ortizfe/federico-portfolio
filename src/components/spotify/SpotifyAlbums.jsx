import { useState, useEffect } from "react";

import LoadingSpinner from "../ui/LoadingSpinner";
import AlbumCard from "./ui/AlbumCard";

const SpotifyAlbums = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchAlbums, setSearchAlbums] = useState([]);

  const spotify_baseurl = "https://express-backend-api-one.vercel.app/";
  const spotify_testurl = "http://localhost:3000/";

  useEffect(() => {
    const getAlbums = async () => {
      let albumsResponse = [];

      try {
        const response = await fetch(
          `${spotify_testurl}spotify/search/albums`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        albumsResponse = await response.json();
      } catch (error) {
        console.error(error.message);
      }

      setSearchAlbums(albumsResponse.items);
      setIsLoading(false);
    };

    getAlbums();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-5">
          {searchAlbums?.map((album) => {
            return (
              <AlbumCard
                key={album.id}
                albumCover={album.images[1].url}
                albumName={album.name}
                artistName={album.artists[0].name}
                releaseDate={album.release_date}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SpotifyAlbums;
