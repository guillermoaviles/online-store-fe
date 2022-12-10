import "./App.css";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Header from "./Components/Header";
import Description from "./Components/Description";
import Homepage from "./Components/Homepage";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = useState()
  const [comments, setComments] = useState();

  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage items={items} setItems={setItems}/>}/>
      <Route path="/description/:id" element={<Description items={items} setItems={setItems} comments={comments} setComments={setComments}/>}/>
      <Route path="/description/edit/:editId" element={<Edit/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </div>
  );
}

export default App;
