import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="absolute top-0 inset-x-0 h-16 p-3 justify-center content-center border-b-1 border-gray-400 bg-gray-700 text-white">
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/spotify">Spotify</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
