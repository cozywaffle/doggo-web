import { FC } from "react";
import emptyPFP from "../assets/empty-pfp.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Profile: FC = () => {
  const data = useSelector((state: RootState) => state.auth.data);

  console.log(data);

  return (
    <section className=" px-2 py-5 w-[1270px] items-start flex gap-x-44">
      <div className="flex flex-col justify-center space-y-1 w-[300px]">
        {data?.userData.avatarUrl ? (
          <img
            className="w-[300px] h-[300px] rounded-full bg-cover"
            src={data?.userData.avatarUrl}
            alt="profile picture"
          />
        ) : (
          <img
            className="w-[300px] h-[300px] rounded-full bg-cover"
            src={emptyPFP}
            alt="profile picture"
          />
        )}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-semibold">
              {data?.userData.username}
            </h1>
            <h2 className="text-md font-normal opacity-50">
              {data?.userData.login}
            </h2>
          </div>
          <Link
            to="/me/edit"
            className="flex w-full justify-center p-2 transition-all rounded-md border-solid border border-white hover:text-black hover:bg-white hover:rounded-sm active:translate-y-[2px]">
            Edit profile
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-4">
          {data?.posts &&
            data?.posts.map((post, index) => (
              <div
                key={post._id + index}
                className="flex flex-col justify-center items-center p-2 rounded-2xl shadow-2xl space-x-2 transition-all cursor-pointer hover:shadow-pink-300 hover:shadow-xl">
                {post.imageUrl && (
                  <div className="w-[550px] h-[450px] flex items-center justify-center">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between w-full text-sm font-thin p-1 opacity-50">
                  <h1>@{data.userData.username}</h1>
                  <h5 className="flex w-[50%] font-thin opacity-50 text-sm truncate">
                    {post.tags.map((tag: string, index) => (
                      <p key={tag + index} className="p-1">
                        #{tag}
                      </p>
                    ))}
                  </h5>
                  <h2>{post.updatedAt.replace("T", " ").replace(".", " ")}</h2>
                </div>
                <h1 className="text-lg font-bold p-1">{post.title}</h1>
                <p className="truncate w-[500px] text-md font-normal p-1">
                  {post.text}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
