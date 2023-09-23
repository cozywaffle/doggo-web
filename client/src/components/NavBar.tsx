import { FC } from "react";
import { Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth.slice";
import { IoIosCreate } from "react-icons/io";

const NavBar: FC = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header className="flex justify-between py-2">
      <Link to="/" className="text-2xl font-extrabold text-white">
        Doggo.WEB
      </Link>
      <div className="flex px-2 bg-zinc-800 rounded-lg items-center justify-center gap-x-2 text-xl">
        <AiOutlineSearch />
        <input
          className="px-1 py-1 outline-none bg-transparent w-auto font-thin placeholder:font-thin placeholder:opacity-25"
          type="text"
          placeholder="Search for posts"
        />
      </div>
      <div className="flex gap-x-4 items-center">
        {isAuth ? (
          <>
            <Link
              to="/create"
              className="flex justify-center items-center text-lg font-thin bg-zinc-800 px-1 py-1 rounded-md">
              <IoIosCreate />
              <p>Add</p>
            </Link>
            <Link
              to="/me"
              className="flex items-center gap-x-1 text-xl font-thin">
              <h3>Profile</h3>
              <CgProfile />
            </Link>
          </>
        ) : (
          <Link to="/login" className="flex items-center gap-x-1 text-lg">
            <RiLoginBoxLine />
            Log in
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
