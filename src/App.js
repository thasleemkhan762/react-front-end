import MainRouter from "./components/Router/MainRouter";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <MainRouter />
    </>
  );
}

export default App;
