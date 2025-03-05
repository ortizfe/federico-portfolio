import { Card, Image, CardFooter } from "@heroui/react";
import PropTypes from "prop-types";

const AlbumCard = ({ albumName, artistName, albumCover }) => {
  return (
    <Card
      isFooterBlurred
      className="flex translate-z-0 flex-col items-center justify-center rounded-2xl border-1 border-white/20 shadow-sm shadow-gray-600 hover:scale-105"
    >
      <Image
        alt={`${albumName} by ${artistName}`}
        src={albumCover}
        className="object-cover"
        height={300}
        width={300}
      />
      <CardFooter className="absolute bottom-1 z-10 w-[calc(100%_-_20px)] items-center justify-center gap-4 overflow-hidden rounded-xl border-1 border-white/20 bg-black/60 px-2 py-2 shadow-sm shadow-black/60">
        <p className="font-bold">{albumName}</p>
        <p>-</p>
        <p className="text-sm font-bold">{artistName}</p>
      </CardFooter>
    </Card>
  );
};

export default AlbumCard;

AlbumCard.propTypes = {
  albumName: PropTypes.string,
  artistName: PropTypes.string,
  albumCover: PropTypes.string,
};
