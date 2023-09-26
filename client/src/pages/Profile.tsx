import { FC } from "react";
import emptyPFP from "../assets/empty-pfp.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import Post from "../components/Post";

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
              <Post
                props={{
                  imageUrl: post.imageUrl,
                  username: data.userData.username,
                  tags: post.tags,
                  userId: data.userData._id,
                  postIndex: index,
                  updatedAt: post.updatedAt,
                  title: post.title,
                  text: post.text,
                }}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
