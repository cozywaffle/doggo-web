import axios from "../axios";
import { FC, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BsEye } from "react-icons/bs";

interface Iuser {
  username: string;
  _id: string;
}

type post = {
  imageUrl?: string;
  username: string;
  tags: string[];
  user: Iuser;
  postIndex: number;
  updatedAt: string;
  title: string;
  text: string;
  viewsCount: number;
};

const FullPost: FC = () => {
  const routeParams = useParams();
  const [post, setPost] = useState<post>();
  const [isLoading, setIsLoading] = useState(true);

  const getPost = async () => {
    try {
      const { data } = await axios.get(`/posts/${routeParams.id}`);

      setPost(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(getPost, []);

  console.log(post);

  return (
    <>
      {!post ? (
        <h1>Loading . . . </h1>
      ) : (
        <div
          key={post.user._id + post.postIndex}
          className="w-[850px] mx-auto my-4 flex flex-col justify-center items-center p-4 rounded-lg bg-neutral-800 shadow-2xl space-x-2">
          {post.imageUrl && (
            <div className="w-full flex items-center justify-center">
              <img
                src={post.imageUrl}
                alt="image"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          )}
          <div className="flex items-center justify-between w-full text-sm font-thin p-1 opacity-50">
            <h1>@{post.user.username}</h1>
            <h5 className="flex w-[50%] font-thin opacity-50 text-sm">
              {post.tags.map((tag: string, index) => (
                <p key={post.user._id + index} className="p-1">
                  #{tag}
                </p>
              ))}
            </h5>
            <h2>{post.updatedAt.replace("T", " ").replace(".", " ")}</h2>
          </div>
          <h1 className="text-lg font-bold p-1">{post.title}</h1>
          <p className="font-normal text-sm p-1">{post.text}</p>
          <div className="px-4 py-1 w-full flex justify-between items-center">
            <div className="flex justify-center items-center space-x-1 text-sm font-thin opacity-30">
              <BsEye />
              <p>{post.viewsCount}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullPost;
