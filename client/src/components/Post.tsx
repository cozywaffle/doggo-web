import { FC } from "react";

interface IProps {
  props: Props;
}

type Props = {
  imageUrl?: string;
  username: string;
  tags: string[];
  userId: string;
  postIndex: number;
  updatedAt: string;
  title: string;
  text: string;
};

const Post: FC<IProps> = ({ props }) => {
  return (
    <div
      key={props.userId + props.postIndex}
      className="flex flex-col justify-center items-center p-2 rounded-2xl shadow-2xl space-x-2 transition-all cursor-pointer hover:shadow-pink-300 hover:shadow-xl">
      {props.imageUrl && (
        <div className="w-[550px] h-[450px] flex items-center justify-center">
          <img
            src={props.imageUrl}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex items-center justify-between w-full text-sm font-thin p-1 opacity-50">
        <h1>@{props.username}</h1>
        <h5 className="flex w-[50%] font-thin opacity-50 text-sm truncate">
          {props.tags.map((tag: string, index) => (
            <p key={props.userId + index} className="p-1">
              #{tag}
            </p>
          ))}
        </h5>
        <h2>{props.updatedAt.replace("T", " ").replace(".", " ")}</h2>
      </div>
      <h1 className="text-lg font-bold p-1">{props.title}</h1>
      <p className="truncate w-[500px] text-md font-normal p-1">{props.text}</p>
    </div>
  );
};

export default Post;
