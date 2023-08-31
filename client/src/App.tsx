import React from "react";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import SidePanel from "./components/SidePanel";

export const App: React.FC = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="split">
        <SidePanel />
        <Main />
      </div>
    </div>
  );
};
