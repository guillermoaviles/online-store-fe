import "./App.css";
import Create from "./Components/Create";
import Item from "./Components/Item";
import Edit from "./Components/Edit";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = useState()

  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage items={items} setItems={setItems}/>}/>
      <Route path="/items/:id" element={<Item items={items} setItems={setItems}/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </div>
  );
}

export default App;
