import { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login: FC = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <section className="text-white flex flex-col gap-y-4 justify-center items-center h-[80vh]">
      <h1 className="text-2xl font-light">Log into your account</h1>
      <form
        className="flex flex-col gap-y-6 justify-center items-center"
        onSubmit={handleSubmit(data => setData(JSON.stringify(data)))}>
        <input
          className="text-lg font-light bg-transparent rounded-md outline-none shadow-md shadow-white py-1 px-2 transition-all hover:shadow-black hover:shadow-md hover:translate-y-[2px] focus:shadow-black focus:shadow-md focus:translate-y-[2px] placeholder:opacity-20"
          {...register("login", { required: true })}
          placeholder="Login"
        />
        <input
          className="text-lg font-light bg-transparent rounded-md outline-none shadow-md shadow-white py-1 px-2 transition-all hover:shadow-black hover:shadow-md hover:translate-y-[2px] focus:shadow-black focus:shadow-md focus:translate-y-[2px] placeholder:opacity-20"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <button
          className="bg-black rounded w-[40%] py-1 px-1 transition-all hover:bg-white hover:text-black active:translate-y-[1px]"
          type="submit">
          Login
        </button>
      </form>
      <div className="flex text-xs font-thin justify-between gap-x-8 opacity-50">
        <p>New to here?</p>
        <Link className="underline" to="/register">
          Create an account
        </Link>
      </div>
    </section>
  );
};

export default Login;
