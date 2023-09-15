import { FC } from "react";
import MainPage from "./pages/mainPage/MainPage";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";

const App: FC = () => {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      <Login />
    </>
  );
};

export default App;
