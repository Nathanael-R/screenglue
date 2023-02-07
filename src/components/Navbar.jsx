import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 px-16 bg-black">
        <h1 className="text-yellow-500 font-extrabold text-4xl cursor-pointer">SCREENGLUE</h1>
        <ul className="flex gap-20 text-white font-bold text-xl">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">Favorites</li>
            <li className=" cursor-pointer">Movies</li>
        </ul>
        <button className="text-white bg-yellow-500 px-9 py-3 rounded-full font-bold text-xl">
            Log In
        </button>
    </nav>
  )
}

export default Navbar