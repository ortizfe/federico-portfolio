import { NavbarItems } from "../../utils";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <header className="h-20">
      <nav className="flex fixed top-0 inset-x-0 z-10 w-screen justify-center px-16 py-6 border-b-1 border-b-gray-400 bg-gray-800 text-white backdrop-blur">
        {/*<nav className="fixed top-0 inset-x-0 z-10 flex w-full items-center px-16 py-6 justify-center content-center border-b border-gray-400 bg-gray-700 text-white backdrop-blur md:justify-items-stretch">*/}
        {/* Small-Screen Menu */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-1">
          {NavbarItems.map((item) => (
            <DesktopMenu menu={item} key={item.name} />
          ))}
        </ul>

        <div className="md:hidden">
          <MobileMenu NavbarItems={NavbarItems} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
