import { X, Menu, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const MobileMenu = ({ NavbarItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: "0",
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="relative z-[999]" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed top-16 right-0 left-0 h-max overflow-y-auto bg-gray-800 p-6 text-white backdrop-blur"
      >
        <ul>
          {NavbarItems?.map(({ name, href, subMenu }, index) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === index;

            return (
              <motion.li
                key={name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  className="flex-center-between relative cursor-pointer rounded-md p-4 hover:bg-white/5"
                  to={href}
                  onClick={() => setClicked(isClicked ? null : index)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </NavLink>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu?.map(({ name, href, icon: Icon }) => (
                      <motion.li key={name} whileHover={{ scale: 1.02 }}>
                        <NavLink
                          className="flex-center cursor-pointer gap-x-2 rounded-md p-2 hover:bg-white/5"
                          to={href}
                        >
                          <Icon size={17} />
                          <span>{name}</span>
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  NavbarItems: PropTypes.array,
};
