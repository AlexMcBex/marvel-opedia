import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<h1 className="">Home</h1>} />
    <Route path="/about" element={<h1>About</h1>} />
    <Route path="/characters" element={<h1>Characters</h1>} />
    <Route path="/comics" element={<h1>Comics</h1>} />
    <Route path="/creators" element={<h1>Creators</h1>} />
    <Route path="/series" element={<h1>Series</h1>} />
    <Route path="/stories" element={<h1>Stories</h1>} />
    <Route path="*" element={<h1>404</h1>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;
