import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-10 flex w-full items-center px-16 py-6 justify-center content-center border-b border-gray-400 bg-gray-700 text-white backdrop-blur md:justify-items-stretch">
        <ul className="hidden md:flex gap-12">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/spotify">Spotify</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
