import { useState, useEffect } from "react";

import LoadingSpinner from "../ui/LoadingSpinner";
import { country_codes } from "./countryCodes";
import ArtistCard from "./ui/ArtistCard";
import { express_baseurl } from "./spotifyUrls";

const SpotifyArtist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [artistSearch, setArtistSearch] = useState(null);
  const [formData, setFormData] = useState({
    artist: "",
  });
  const [userCountry, setUserCountry] = useState("");

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

  const userSearchArtist = () => {
    setIsLoading(true);

    getArtist(formData.artist, userCountry);
  };

  const getArtist = async (artist, market) => {
    let artistResponse = [];
    const artistQuery = artist.split(" ").join("+");

    const timeout = 10000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(
        `${express_baseurl.prod}spotify/search/artists?input=${artistQuery}&input=${market}`,
        {
          method: "GET",
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      clearTimeout(id);
      artistResponse = await response.json();
      setArtistSearch(artistResponse.items);
    } catch (error) {
      console.error(error.message);
    }

    setIsLoading(false);
    setFormData((prevData) => ({
      ...prevData,
      artist: "",
    }));
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 pb-10">
        <p>Please enter the artist you would like to search for below. </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pr-1.5 pl-6"
        >
          <input
            type="text"
            placeholder="Enter an artist name"
            name="artist"
            id="artist"
            value={formData.artist}
            onChange={handleUserInput}
            className="text-md w-full bg-transparent text-white placeholder-white/80 focus:outline-0"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              userSearchArtist();
            }}
            className="group flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[rgba(30,215,96,1)] bg-gradient-to-br px-4 py-3 text-sm font-medium text-gray-900 transition-transform active:scale-[0.985]"
          >
            Search
          </button>
        </form>
      </div>
      {isLoading && <LoadingSpinner />}{" "}
      {artistSearch && (
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <ArtistCard
                artistName={artistSearch[0].name}
                artistId={artistSearch[0].id}
                artistCover={
                  artistSearch[0]?.images[0]?.url
                    ? artistSearch[0].images[0].url
                    : "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <p className="flex h-15 flex-col items-center justify-center text-xl">
                Other suggested artists
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {artistSearch.slice(1).map((artist) => {
                return (
                  <ArtistCard
                    key={artist.id}
                    artistName={artist.name}
                    artistId={artist.id}
                    artistCover={
                      artist?.images[0]?.url
                        ? artist.images[0].url
                        : "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpotifyArtist;
