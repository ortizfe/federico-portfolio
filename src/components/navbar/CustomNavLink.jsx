import { motion } from "motion/react";
import PropTypes from "prop-types";

const CustomNavLink = ({ link, children }) => {
  return (
    <a href={link} rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        whileTap={{ scale: 0.2 }}
        className="h-[20px] hover:cursor-pointer"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-amber-600">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

export default CustomNavLink;

CustomNavLink.propTypes = {
  children: PropTypes.any,
  link: PropTypes.string,
};
