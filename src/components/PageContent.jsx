import PropTypes from "prop-types";
import NavBar from "./navbar/NavBar";
import { Frown } from "lucide-react";
import { motion } from "motion/react";

const PageContent = ({ title, children }) => {
  const error = 404;

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-4 pt-10">
        <motion.div
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
        >
          <Frown className="size-30" />
        </motion.div>
        <div className="pt-10">
          <h1 className="text-6xl">{error}</h1>
          <h1 className="text-3xl">{title}</h1>
          <div className="text-md text-gray-400">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};
