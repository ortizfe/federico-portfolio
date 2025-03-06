import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";

const ArtistCard = ({ artistName, artistCover, artistId }) => {
  return (
    <section className="grid grid-cols-1 place-content-center p-2">
      <button className="group flex h-10 cursor-pointer items-center gap-5 rounded-full bg-neutral-200 pr-4 pl-3 text-black transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:font-bold hover:text-white active:bg-neutral-700">
        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
          <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
        </span>
        <span className="justify-center p-2 text-lg uppercase">
          {artistName}
        </span>
      </button>
    </section>
  );
};

export default ArtistCard;

ArtistCard.propTypes = {
  artistName: PropTypes.string,
  artistCover: PropTypes.string,
  artistId: PropTypes.string,
};
