import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Landingpage from "./Pages/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/"} element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
