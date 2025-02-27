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
      <button className="z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed left-0 right-0 top-16 overflow-y-auto h-max bg-gray-800 backdrop-blur text-white p-6"
      >
        <ul>
          {NavbarItems?.map(({ name, subMenu }, index) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === index;

            return (
              <li key={name}>
                <NavLink
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
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
                    {subMenu?.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md cursor-pointer gap-x-2"
                      >
                        <Icon size={17} />
                        <NavLink>{name}</NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
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
