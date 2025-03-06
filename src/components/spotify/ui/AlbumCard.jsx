// import { Card, Image, CardFooter } from "@heroui/react";
import { motion, MotionConfig } from "motion/react";
import PropTypes from "prop-types";

const AlbumCard = ({ albumName, artistName, albumCover }) => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.5,
      }}
    >
      <motion.div
        whileHover="hovered"
        style={{ "--image-url": `url(${albumCover})` }}
        className={`group h-[300px] w-[300px] border-2 border-black bg-[image:var(--image-url)]`}
      >
        <motion.div
          initial={{
            x: 0,
            y: 0,
          }}
          variants={{
            hovered: {
              x: -8,
              y: -8,
            },
          }}
          style={{ "--image-url": `url(${albumCover})` }}
          className={`-m-0.5 h-[300px] w-[300px] border-2 border-black bg-[image:var(--image-url)]`}
        >
          <motion.div
            initial={{
              x: 0,
              y: 0,
            }}
            variants={{
              hovered: {
                x: -8,
                y: -8,
              },
            }}
            style={{ "--image-url": `url(${albumCover})` }}
            className={`relative -m-0.5 flex h-[300px] w-[300px] flex-col items-center justify-between overflow-hidden border-2 border-black bg-[image:var(--image-url)] p-8`}
          >
            <p className="flex translate-y-full items-center rounded-xl border-2 border-black bg-white/80 px-4 py-2 text-xl font-medium text-black uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              {albumName}
            </p>
            <div>
              <span className="absolute right-2 bottom-2 left-2 translate-y-full rounded-xl border-2 border-black bg-white/80 px-4 py-2 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                {artistName}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>

    // <Card
    //   isFooterBlurred
    //   className="flex translate-z-0 flex-col items-center justify-center rounded-2xl border-1 border-white/20 shadow-gray-400 hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg"
    // >
    //   <Image
    //     alt={`${albumName} by ${artistName}`}
    //     src={albumCover}
    //     className="object-cover"
    //     height={300}
    //     width={300}
    //   />
    //   <CardFooter className="Card absolute bottom-1 z-10 w-[calc(100%_-_20px)] items-center justify-center gap-4 overflow-hidden rounded-xl border-1 border-white/20 bg-black/60 px-2 py-2 shadow-sm shadow-black/60 backface-hidden">
    //     <p className="font-bold">{albumName}</p>
    //     <p>-</p>
    //     <p className="text-sm font-bold">{artistName}</p>
    //   </CardFooter>
    // </Card>
  );
};

export default AlbumCard;

AlbumCard.propTypes = {
  albumName: PropTypes.string,
  artistName: PropTypes.string,
  albumCover: PropTypes.string,
};
