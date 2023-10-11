import { ChangeEvent, FC, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../utils/axios";
import { Navigate } from "react-router-dom";

interface IData {
  image?: File[];
  title: string;
  tags?: string[] | string;
  text: string;
}

const CreatePost: FC = () => {
  const { register, handleSubmit } = useForm<IData>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [status, setStatus] = useState<number>();

  const imgUploadHandler = async (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const image: File = (target.files as FileList)[0];

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      const imageData = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImageUrl(`http://localhost:3004${imageData.data.url}`);
    }
  };

  const onSubmit = async (data: IData) => {
    if (typeof data.tags === "string") {
      data.tags = data.tags.split(", ");
    }

    const fields = {
      title: data.title,
      text: data.text,
      imageUrl,
      tags: data.tags,
    };

    try {
      const status = await axios.post("/posts", fields);

      console.log(status);
      setStatus(status.status);

      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  if (status === 200) {
    return <Navigate to="/posts" />;
  }

  return (
    <section className="flex flex-col justify-center items-center my-4 py-2 px-4">
      <div className="flex justify-center items-center p-2 rounded-2xl shadow-2xl space-x-2">
        {imageUrl && (
          <div className="w-[50%] h-[300px] flex items-center justify-center">
            <img
              src={imageUrl}
              alt="uploaded"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="flex justify-center items-center flex-col text-black none">
          <input
            type="file"
            {...register("image")}
            onChange={imgUploadHandler}
            className="flex w-[30%] text-sm text-white rounded-lg cursor-pointer bg-neutral-800 outline-none"
          />
          <input
            type="text"
            {...register("title")}
            placeholder="Title"
            className="outline-none p-1 text-md bg-neutral-800 text-white rounded-md my-1 w-[80%]"
          />
          <input
            type="text"
            {...register("tags")}
            placeholder="Hashtags"
            className="outline-none p-1 text-md bg-neutral-800 text-white rounded-md my-1 w-[95%]"
          />
          <textarea
            {...register("text")}
            rows={8}
            cols={100}
            className="outline-none p-1 text-md bg-neutral-800 text-white rounded-md my-1"
          />
          <button
            type="submit"
            className="flex bg-neutral-800 text-white py-1 px-4 rounded-md text-lg font-normal my-1 transition-all hover:bg-white hover:text-black active:translate-y-[2px] ">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
