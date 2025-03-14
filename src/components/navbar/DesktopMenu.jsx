import { NavLink } from "react-router";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import CustomNavLink from "./CustomNavLink";

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  // animation variants
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
    >
      <CustomNavLink
        link={menu.href}
        className="flex-center cursor-pointer gap-1 rounded-xl px-3 py-1 hover:bg-white/7"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] duration-300 group-hover/link:rotate-180" />
        )}
      </CustomNavLink>

      {hasSubMenu && (
        <motion.div
          className="sub-menu bg-neutral-950/100"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div className="grid gap-7">
            {menu?.subMenu?.map((subMenu) => (
              <div key={subMenu.name} className="relative cursor-pointer">
                <NavLink to={subMenu.href}>
                  <div className="flex-center group/menubox justify-start gap-x-4">
                    <div className="w-fit rounded-lg bg-white/5 p-2 duration-300 group-hover/menubox:bg-white group-hover/menubox:text-gray-900">
                      {subMenu?.icon && <subMenu.icon />}
                    </div>
                    <div>
                      <h6 className="flex justify-start font-semibold">
                        {subMenu.name}
                      </h6>
                      <p className="flex justify-start text-sm text-gray-400">
                        {subMenu?.desc}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;

DesktopMenu.propTypes = {
  menu: PropTypes.array,
};
