import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";
import logo from "../assets/fern-821293_640.jpg";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-green-400">
      <div className="flex flex-row justify-center items-center">
        <img className="w-10 h-10 rounded-xl mr-1" src={logo} alt="" />
        <p>PlantPedia</p>
      </div>
      <ul
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col items-center w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-center`}
      >
        <li>
          <Link
            className="inline-block py-2 mx-4 text-lg sm:py-0 sm:text-xs lg:text-lg text-black"
            href="#"
          >
            Search Plant
          </Link>
        </li>
        <li>
          <Link className="inline-block py-2 mx-4 text-lg sm:py-0 sm:text-xs lg:text-lg  text-black">
            Search by categories
          </Link>
        </li>
        <li>
          <Link
            className="inline-block py-2 mx-4 text-lg sm:py-0 sm:text-xs lg:text-lg  text-black"
            href="#"
          >
            Search by countries
          </Link>
        </li>
      </ul>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto sm:hidden"
      >
        <img
          className="w-4"
          src={showMenu ? close : hamburger}
          alt={showMenu ? "Cacher le menu" : "Montrer le menu"}
        />
      </button>
    </nav>
  );
}
