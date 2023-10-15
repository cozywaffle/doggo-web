import {
  ChangeEvent,
  FC,
  useState,
  useRef,
  MutableRefObject,
  useEffect,
} from "react";
import emptyPFP from "../assets/empty-pfp.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useForm } from "react-hook-form";
import axios from "../utils/axios";
import { Navigate } from "react-router-dom";

interface IInputFields {
  avatarUrl: File;
  username: string;
  login: string;
}

const EditProfile: FC = () => {
  const data = useSelector((state: RootState) => state.auth.data);
  const { register, handleSubmit } = useForm<IInputFields>();
  const inputFileRef = useRef<HTMLInputElement>(
    null,
  ) as MutableRefObject<HTMLInputElement>;

  const [saved, setSaved] = useState(false);

  const [usernameInput, setUsernameInput] = useState(data?.userData.username);
  useEffect(() => {
    setUsernameInput(data?.userData.username);
  }, [data]);

  const [loginInput, setLoginInput] = useState(data?.userData.login);
  useEffect(() => {
    setLoginInput(data?.userData.login);
  }, [data]);

  const [avatarUrl, setAvatarUrl] = useState("");

  const avatarUploadHandler = async (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const image: File = (target.files as FileList)[0];

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      const imageData = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAvatarUrl(`http://localhost:3004${imageData.data.url}`);
    }
  };

  const onSubmit = async (values: IInputFields) => {
    try {
      const input_fields = {
        _id: data?.userData._id,
        username: values.username,
        login: values.login,
        avatarUrl,
      };

      const response = await axios.patch("/auth/me", input_fields);

      console.log(response);

      setSaved(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (saved) {
    alert("Changes had succesfully saved!");
    return <Navigate to="/me" />;
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 flex flex-col justify-center items-center space-y-4">
        {data?.userData.avatarUrl ? (
          <img
            className="w-[400px] h-[400px] rounded-full bg-cover cursor-pointer transition-all hover:opacity-80"
            src={avatarUrl || data?.userData.avatarUrl}
            alt="profile picture"
            onClick={() => inputFileRef.current.click()}
          />
        ) : (
          <img
            className="w-[300px] h-[300px] rounded-full bg-cover cursor-pointer transition-all hover:opacity-80"
            src={avatarUrl || emptyPFP}
            alt="profile picture"
            onClick={() => inputFileRef.current.click()}
          />
        )}
        <input
          type="file"
          {...register("avatarUrl")}
          ref={inputFileRef}
          onChange={avatarUploadHandler}
          hidden
        />
        <div className="space-y-4 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center space-y-1">
            <label className="text-sm font-thin opacity-50">Username:</label>
            <input
              type="text"
              {...register("username")}
              onChange={e => setUsernameInput(e.target.value)}
              value={usernameInput}
              className="bg-transparent outline-none text-white text-xl font-medium p-1 rounded-md focus:bg-white focus:bg-opacity-10 "
            />
            <label className="text-sm font-thin opacity-50">Login:</label>
            <input
              type="text"
              {...register("login")}
              onChange={e => setLoginInput(e.target.value)}
              value={loginInput}
              className="bg-transparent outline-none text-white text-xl font-medium p-1 rounded-md focus:bg-white focus:bg-opacity-10 "
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-1 px-4 border-solid border-white border-[1px] rounded-md text-white transition-all hover:bg-white hover:text-black active:translate-y-[2px] ">
          Save
        </button>
      </form>
    </section>
  );
};

export default EditProfile;
