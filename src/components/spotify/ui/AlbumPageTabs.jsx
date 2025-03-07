import AlbumCard from "./AlbumCard";
import PropTypes from "prop-types";

export const AlbumPageTabs = ({ albums }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {albums?.map((album) => {
          return (
            <AlbumCard
              key={album.id}
              albumCover={album.images[1].url}
              albumName={album.name}
              artistName={album.artists[0].name}
              albumType={album.album_type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlbumPageTabs;

AlbumPageTabs.propTypes = {
  albums: PropTypes.array,
};
