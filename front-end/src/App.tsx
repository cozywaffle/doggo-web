import React from "react";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";

export const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
};
