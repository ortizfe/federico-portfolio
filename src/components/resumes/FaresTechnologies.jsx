import { motion } from "motion/react";
import { BiLogoJavascript, BiLogoNodejs, BiLogoReact } from "react-icons/bi";

const FaresTechnologies = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-2">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoJavascript className="cursor-pointer text-[80px] text-[rgba(255,255,0)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoReact className="cursor-pointer text-[80px] text-[rgba(97,219,251)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoNodejs className="cursor-pointer text-[80px] text-[rgba(68,136,62)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
    </div>
  );
};

export default FaresTechnologies;
