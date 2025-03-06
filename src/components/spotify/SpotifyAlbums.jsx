import { useState, useEffect } from "react";

import LoadingSpinner from "../ui/LoadingSpinner";
import AlbumCard from "./ui/AlbumCard";
import { Input } from "@heroui/react";

const SpotifyAlbums = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchAlbums, setSearchAlbums] = useState([]);
  const [formData, setFormData] = useState({
    album: "",
  });

  const spotify_baseurl = "https://express-backend-api-one.vercel.app/";
  const spotify_testurl = "http://localhost:3000/";

  const userSearchAlbum = () => {
    console.log("form submitted");
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
          <div className="flex flex-col gap-2">
            <p>Please enter the album you would like to search for below</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pr-1.5 pl-6"
            >
              <input
                type="text"
                placeholder="Enter an album name"
                name="album"
                id="album"
                value={formData.album}
                onChange={handleUserInput}
                className="text-md w-full bg-transparent text-white placeholder-white/80 focus:outline-0"
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.stopPropagation();
                  userSearchAlbum();
                }}
                className="group flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[rgba(30,215,96,1)] bg-gradient-to-br px-4 py-3 text-sm font-medium text-gray-900 transition-transform active:scale-[0.985]"
              >
                Search
              </button>
            </form>
          </div>
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
        </div>
      )}
    </>
  );
};

export default SpotifyAlbums;
