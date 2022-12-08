import "./App.css";
import Create from "./Components/Create";
import Description from "./Components/Description";
import Edit from "./Components/Edit";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/description/:id" element={<Description/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </div>
  );
}

export default App;
