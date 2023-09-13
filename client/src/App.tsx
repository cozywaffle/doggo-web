import { FC } from "react";
import MainPage from "./pages/mainPage/MainPage";
import Header from "./components/header/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};

export default App;
