import { FC } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
