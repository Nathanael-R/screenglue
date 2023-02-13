import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="sm:flex items-center justify-between md:py-5 md:px-16 sm:px-8 bg-black py-2 px-4 hidden">
      <Link to="/">
        <h1 className="text-yellow-500 font-extrabold text-3xl md:text-4xl cursor-pointer">
          SCREENGLUE
        </h1>
      </Link>
      <ul className="flex gap-20 text-white font-bold text-xl">
        <Link to="/">
          <li className=" cursor-pointer">Home</li>
        </Link>
        {/* <Link> */}
        <li className=" cursor-pointer">Favorites</li>
        {/* </Link> */}
        <Link to="/movies">
          <li className=" cursor-pointer">Movies</li>
        </Link>
      </ul>
      <div className="flex items-center gap-4">
        <Search />
        <button className="text-white bg-yellow-500 px-9 py-2 rounded-full font-bold text-xl">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
