import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import fede from "../assets/cropped-fede.png";
import { FEDERICO } from "../components/resumes/resumes";
import ResumeLayout from "../components/resumes/ResumeLayout";
import FedericoTechnologies from "../components/resumes/FedericoTechnologies";

const FedericoPage = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-10 py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={fede}
            alt="Federico Headshot"
            width={150}
            height={150}
            className="rounded-full shadow-xl shadow-gray-500 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-gray-300"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-2 pb-5"
        >
          <h1 className="text-4xl md:text-6xl">Federico Ortiz</h1>
          <h3 className="text-md md:text-xl">
            Full-Stack Developer || Data Engineer
          </h3>
          <h3>B.S. in Computer Science</h3>
          <div className="flex flex-wrap items-center justify-center gap-15 pt-5">
            <a
              href="https://github.com/ortizfe"
              target="_blank"
              className="hover:scale-110 hover:cursor-pointer hover:text-indigo-300/80"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/federico-ortiz-68316a92/"
              target="_blank"
              className="hover:scale-110 hover:cursor-pointer hover:text-indigo-300/80"
            >
              <FaLinkedin size={50} />
            </a>
          </div>
        </motion.div>
        <FedericoTechnologies />

        {FEDERICO.map((resume, i) => {
          return (
            <motion.div
              key={i}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col items-center justify-center pt-30"
            >
              <ResumeLayout
                company={resume.company}
                position={resume.position}
                location={resume.location}
                dates={resume.dates}
                details={resume.details}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FedericoPage;
