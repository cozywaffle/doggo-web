import { FC } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "./redux/slices/auth.slice";
import { AppDispatch } from "./redux/store";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMe());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
