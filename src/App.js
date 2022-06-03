import React from "react";
import { Routes, Route } from "react-router-dom";
import ListNote from './components/note/ListNote';
import Home from './components/home/Home'
import AddNote from './components/note/AddNote'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/note/list" element={<ListNote />} />
        <Route path="/note/add" element={<AddNote />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
