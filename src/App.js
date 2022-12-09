import "./App.css";
import Create from "./Components/Create";
import Description from "./Components/Description";
import Edit from "./Components/Edit";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setAllItems] = useState({})

  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage items={items} setAllItems={setAllItems}/>}/>
      <Route path="/description/:id" element={<Description/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </div>
  );
}

export default App;
