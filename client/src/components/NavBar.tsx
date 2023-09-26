import { FC } from "react";
import { Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth.slice";
import { BiMessageAltAdd } from "react-icons/bi";
import { RootState } from "../redux/store";

const NavBar: FC = () => {
  const isAuth = useSelector(selectIsAuth);

  const data = useSelector((state: RootState) => state.auth.data);

  console.log(data?.userData.avatarUrl);

  return (
    <header className="flex justify-between py-2">
      <Link to="/posts" className="text-2xl font-extrabold text-white">
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
              className="flex justify-center items-center gap-1 bg-neutral-800 px-1 py-1 rounded-md transition-all hover:bg-neutral-700  active:translate-y-[1px]">
              <BiMessageAltAdd />
              <p className="text-md font-normal">Add</p>
            </Link>
            {isAuth ? (
              <Link
                to="/me"
                className="flex items-center gap-x-2 text-xl font-thin">
                <h3 className="text-sm font-thin opacity-50">
                  @{data?.userData.username}
                </h3>
                <img
                  src={data?.userData.avatarUrl}
                  alt="profile picture"
                  className="w-[40px] h-[40px] rounded-full"
                />
              </Link>
            ) : (
              <Link
                to="/me"
                className="flex items-center gap-x-1 text-xl font-thin">
                <h3>Profile</h3>
                <CgProfile />
              </Link>
            )}
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
