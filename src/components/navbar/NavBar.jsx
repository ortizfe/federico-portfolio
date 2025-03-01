import { NavbarItems } from "../../utils";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <header className="h-20">
      <nav className="fixed inset-x-0 top-0 z-10 flex w-screen border-b-1 border-b-gray-400 bg-gray-800 px-16 py-6 text-white backdrop-blur sm:justify-start md:justify-center">
        {/* Desktop Menu */}
        <ul className="hidden gap-x-1 font-semibold text-amber-600 md:flex">
          {NavbarItems.map((item) => (
            <DesktopMenu menu={item} key={item.name} />
          ))}
        </ul>

        {/* Small-Screen Menu */}
        <div className="md:hidden">
          <MobileMenu NavbarItems={NavbarItems} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
