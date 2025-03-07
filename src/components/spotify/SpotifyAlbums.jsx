import { useState, useEffect } from "react";

import LoadingSpinner from "../ui/LoadingSpinner";
import AlbumPageTabs from "./ui/AlbumPageTabs";
import { country_codes } from "./countryCodes";
import { Pagination } from "@mui/material";
import { express_baseurl } from "../../utils";

const SpotifyAlbums = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchAlbums, setSearchAlbums] = useState([]);
  const [formData, setFormData] = useState({
    album: "",
  });
  const [userCountry, setUserCountry] = useState("");

  /* states for pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [albumsPerPage] = useState(6);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");

        if (!response.ok) {
          setUserCountry("US");
          throw new Error("Failed to fetch IP data");
        }

        const data = await response.json();

        if (Object.keys(country_codes).includes(data.country_code)) {
          setUserCountry(data.country_code);
        } else {
          setUserCountry("US");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCountry();
  }, []);

  const userSearchAlbum = () => {
    setIsLoading(true);

    getAlbums(formData.album, userCountry);
  };

  const getAlbums = async (album, market) => {
    let albumsResponse = [];
    const albumQuery = album.split(" ").join("+");

    const timeout = 10000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(
        `${express_baseurl}spotify/search/albums?input=${albumQuery}&input=${market}`,
        {
          method: "GET",
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      clearTimeout(id);
      albumsResponse = await response.json();
    } catch (error) {
      console.error(error.message);
    }

    setSearchAlbums(albumsResponse.items);
    setIsLoading(false);
    setFormData((prevData) => ({
      ...prevData,
      album: "",
    }));
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Get current albums
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = searchAlbums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const numPages = Math.ceil(searchAlbums.length / currentAlbums.length);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 pb-10">
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
      {isLoading && <LoadingSpinner />}
      {searchAlbums && (
        <div className="flex flex-col gap-5">
          <AlbumPageTabs albums={currentAlbums} />

          <div className="flex flex-wrap items-center justify-center">
            <Pagination
              count={numPages}
              color="primary"
              size="large"
              sx={{
                backgroundColor: "white",
                borderRadius: "50px",
                opacity: `${searchAlbums.length > 0 ? 100 : 0}`,
              }}
              onChange={(e, value) => setCurrentPage(value)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SpotifyAlbums;
