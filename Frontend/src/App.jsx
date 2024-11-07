import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Success from "./Components/Success";
import NotFound from "./Components/NotFound";
  import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/success" element={<Success></Success>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
        <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
};

export default App;
