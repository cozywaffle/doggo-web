import { FC, useMemo, useState } from "react";
import axios from "../axios";

interface Iuser {
  username: string;
  _id: string;
}

interface IDBData {
  imageUrl: string;
  title: string;
  tags: string[];
  text: string;
  updatedAt: string;
  user: Iuser;
}

const Home: FC = () => {
  const [posts, setPosts] = useState<IDBData[]>();

  const fetchPosts = async () => {
    const { data } = await axios.get("/posts");

    setPosts(data);
  };

  useMemo(fetchPosts, []);

  console.log(posts);

  return (
    <section className="flex flex-col justify-center items-center p-4 space-y-6">
      {posts ? (
        posts.map((post, index) => (
          <div
            key={post.user._id + index}
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
              <h1>@{post.user.username}</h1>
              <h5 className="flex w-[50%] font-thin opacity-50 text-sm truncate">
                {post.tags.map((tag: string, index) => (
                  <p key={post.user._id + index} className="p-1">
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
        ))
      ) : (
        <>
          <h1>Couldn't find any posts :/</h1>
          <h1>Try again later!</h1>
        </>
      )}
    </section>
  );
};

export default Home;
