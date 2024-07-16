import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PageRoute from "./PageRoutes/PageRoute";

function App() {
  return (
    <BrowserRouter>
      <PageRoute />
    </BrowserRouter>
  );
}

export default App;
