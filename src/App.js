import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Diagnosis from "./components/Diagnosis";
import Main from "./components/Main";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/test").then((res) =>
      res.json().then((e) => {
        setData(e);
        console.log(e);
      })
    );
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
