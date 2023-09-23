import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../axios";

const CreatePost: FC = () => {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = async data => {
    const formData = new FormData();
    console.log(data);
    formData.append("image", data.image[0]);

    console.log(data);

    try {
      const imageData = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImageUrl(imageData.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input type="file" {...register("image")} />

        <input type="submit" />
      </form>

      <img src={`http://localhost:3004${imageUrl}`} alt="uploaded" />
    </section>
  );
};

export default CreatePost;
