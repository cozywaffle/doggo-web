import { FC } from "react";
import { useForm } from "react-hook-form";
import axios from "../axios";

const CreatePost: FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res = await fetch("http://localhost:3004/posts/", {
      method: "POST",
      body: formData,
    }).then(res => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />

        <input type="submit" />
      </form>
    </section>
  );
};

export default CreatePost;
