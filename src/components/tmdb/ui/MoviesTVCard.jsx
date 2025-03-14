import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableColumn,
  TableRow,
} from "@heroui/table";
import MoviesTVModal from "./MoviesTVModal";
import PropTypes from "prop-types";
import { useState } from "react";

const MoviesTVCard = ({ discoverList, movieOrTv }) => {
  const [isMovieTVModalOpen, setIsMovieTVModalOpen] = useState(false);
  const [discoverId, setDiscoverId] = useState("");

  return (
    <div>
      <Table
        area-label="Table"
        className="rounded-sm bg-white text-black outline-1"
      >
        <TableHeader aria-label="Headers for the three table columns">
          <TableColumn aria-label="Rank">Rank</TableColumn>
          <TableColumn aria-label="Title">Title</TableColumn>
          <TableColumn aria-label="Rating">Rating</TableColumn>
        </TableHeader>
        <TableBody aria-label="Table Body">
          {discoverList.map((item, i) => {
            return (
              <TableRow aria-label="Row" key={item.id} className="border-1">
                <TableCell aria-label="Ranking" className="border-1">
                  {i + 1}
                </TableCell>
                {item.title ? (
                  <TableCell aria-label="Title">
                    <button
                      className="cursor-pointer hover:scale-110 hover:text-indigo-600"
                      onClick={() => {
                        setDiscoverId(item.id);
                        setIsMovieTVModalOpen(true);
                      }}
                    >
                      {item.title}
                    </button>
                  </TableCell>
                ) : (
                  <TableCell aria-label="Title">
                    <button
                      className="cursor-pointer hover:scale-110 hover:text-indigo-600"
                      onClick={() => {
                        setDiscoverId(item.id);
                        setIsMovieTVModalOpen(true);
                      }}
                      aria-label="Open"
                    >
                      {item.name}
                    </button>
                  </TableCell>
                )}
                <TableCell aria-label="Rating" className="border-1">
                  {Math.round(item.vote_average * 10) / 10} / 10
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {isMovieTVModalOpen && (
        <MoviesTVModal
          type={movieOrTv}
          discoverId={discoverId}
          isOpen={isMovieTVModalOpen}
          setIsOpen={setIsMovieTVModalOpen}
        />
      )}
    </div>
  );
};

export default MoviesTVCard;

MoviesTVCard.propTypes = {
  discoverList: PropTypes.array,
  movieOrTv: PropTypes.string,
};
