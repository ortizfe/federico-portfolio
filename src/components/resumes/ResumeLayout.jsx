import PropTypes from "prop-types";
import { motion } from "motion/react";

const ResumeLayout = ({ company, position, location, details, dates }) => {
  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex w-full flex-col rounded-lg bg-white/80 p-10 text-black shadow-xl shadow-black">
      <div className="flex flex-col gap-5">
        <h1 className="items-center justify-center text-4xl font-bold">
          {company}
        </h1>
        <div className="text-end">
          <h3 className="text-md">{position}</h3>
          <p className="text-sm">{location}</p>
          <p className="text-sm">{dates}</p>
        </div>
      </div>
      <p className="text-start"></p>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        className="flex list-disc flex-col gap-2 pt-5 text-start"
      >
        {details.map((item, i) => {
          return (
            <motion.li variants={itemVariants} whileInView="visible" key={i}>
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default ResumeLayout;

ResumeLayout.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  details: PropTypes.array,
  dates: PropTypes.string,
};
