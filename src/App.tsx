import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";
import "antd/dist/antd.min.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
