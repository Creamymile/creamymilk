import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./Pages/home";
import Boxicons from "./Pages/boxicons";

function App() {
  return (
    <div className="main">
      <div></div>
      <Navbar />
      <Home />
      <Boxicons />
    </div>
  );
}

export default App;
