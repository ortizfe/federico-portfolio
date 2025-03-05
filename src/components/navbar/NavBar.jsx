import { NavbarItems } from "../../utils";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 250) {
      setHidden("hidden");
    } else {
      setHidden("");
    }
  });

  return (
    <header className="h-20">
      <motion.nav
        animate={hidden ? "hidden" : ""}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed ${hidden} inset-x-0 top-0 z-10 flex w-screen bg-neutral-950/40 px-16 py-6 shadow-xl backdrop-blur sm:justify-start md:justify-center`}
      >
        {/* Desktop Menu */}
        {/* <ul className="hidden gap-x-1 font-semibold text-white md:flex"> */}
        <ul className="hidden gap-10 font-semibold md:flex">
          {NavbarItems.map((item) => (
            <DesktopMenu menu={item} key={item.name} />
          ))}
        </ul>
        {/* </ul> */}

        {/* Small-Screen Menu */}
        <div className="md:hidden">
          <MobileMenu NavbarItems={NavbarItems} />
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
