import { AnimatePresence, motion } from "motion/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../ui/LoadingSpinner";

const MONTHS = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const ArtistModal = ({ discoverId, type, isOpen, setIsOpen }) => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDetails = async (detailsId, movieOrTv) => {
      let detailsSearch = "";
      setIsLoading(true);

      const timeout = 10000;
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        const response = await fetch(
          `https://express-backend-api-one.vercel.app/tmdb/${movieOrTv}_details?input=${detailsId}`,
          {
            method: "GET",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        clearTimeout(id);
        detailsSearch = await response.json();
      } catch (error) {
        console.log(`Error message: ${error}`);
      }

      console.log(detailsSearch);
      setDetails(detailsSearch);
      setIsLoading(false);
    };

    getDetails(discoverId, type);
  }, [discoverId, type]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-black/80 p-6 text-white shadow-xl"
          >
            <div className="relative z-10">
              {isLoading && <LoadingSpinner />}
              {details && type === "movie" && (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="pb-3">
                    <h1 className="text-4xl font-bold uppercase">
                      {details.title}
                    </h1>
                    <h3 className="flex flex-wrap items-center justify-center text-sm text-white">
                      <p>{details.genres[0].name}</p>
                      {details.genres.slice(1).map((genre) => {
                        return <p key={genre.id}>,&nbsp;{genre.name}</p>;
                      })}
                    </h3>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-start">
                    <p>{details.overview}</p>
                    <h3 className="text-sm">
                      Released:&nbsp;&nbsp;
                      {
                        MONTHS[parseInt(details.release_date.split("-")[1])]
                      }{" "}
                      {parseInt(details.release_date.split("-")[2])},{" "}
                      {parseInt(details.release_date.split("-")[0])}
                    </h3>
                  </div>
                </div>
              )}
              {details && type === "tv" && (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="pb-3">
                    <h1 className="text-4xl font-bold uppercase">
                      {details.name}
                    </h1>
                    <h3 className="flex flex-wrap items-center justify-center text-sm text-white">
                      <p>{details.genres[0].name}</p>
                      {details.genres.slice(1).map((genre) => {
                        return <p key={genre.id}>,&nbsp;{genre.name}</p>;
                      })}
                    </h3>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-start">
                    <p>{details.overview}</p>
                    <h3 className="flex flex-wrap text-sm">
                      <p>{details.seasons.length} Seasons&nbsp;&nbsp;</p>
                      {`(${parseInt(details.first_air_date.split("-")[0])} - ${parseInt(details.last_air_date.split("-")[0])})`}
                    </h3>
                  </div>
                </div>
              )}
              <div className="flex justify-center pt-5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-indingo-600 w-auto cursor-pointer rounded-full bg-white px-10 py-1 font-semibold text-black transition-colors hover:scale-105 hover:bg-white/80"
                  aria-label="Close modal button"
                >
                  Back
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtistModal;

ArtistModal.propTypes = {
  discoverId: PropTypes.string,
  type: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
