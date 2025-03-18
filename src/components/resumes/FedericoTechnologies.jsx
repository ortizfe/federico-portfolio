import { motion } from "motion/react";
import {
  BiLogoAngular,
  BiLogoDocker,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";

const FedericoTechnologies = () => {
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
        <BiLogoTypescript className="cursor-pointer text-[80px] text-[rgba(49,120,198)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
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
        <BiLogoPython className="cursor-pointer text-[80px] text-[rgba(255,216,64)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
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
        <BiLogoAngular className="cursor-pointer text-[80px] text-[rgba(195,0,47)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoDocker className="cursor-pointer text-[80px] text-[rgba(13,183,237)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoNodejs className="cursor-pointer text-[80px] text-[rgba(68,136,62)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoMongodb className="cursor-pointer text-[80px] text-[rgba(77,179,61)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoJava className="cursor-pointer text-[80px] text-[rgba(248,152,32)] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
      </motion.div>
    </div>
  );
};

export default FedericoTechnologies;
