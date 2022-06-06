import React from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Hero } from "./componenets/Hero";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
