import { FC } from "react";
import { Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar: FC = () => {
  return (
    <header className="flex justify-between py-2">
      <Link to="/" className="text-2xl font-extrabold text-white">
        Doggo.WEB
      </Link>
      <div className="flex items-center justify-center gap-x-2 text-xl">
        <AiOutlineSearch />
        <input
          className="px-2 py-1 rounded-lg bg-zinc-800 w-auto"
          type="text"
        />
      </div>
      <div className="flex gap-x-4">
        <Link to="/login" className="flex items-center gap-x-1 text-lg">
          <RiLoginBoxLine />
          Log in
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
