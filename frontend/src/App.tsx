import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/characters" element={<div>Characters</div>} />
        <Route path="/comics" element={<div>Comics</div>} />
        <Route path="/creators" element={<div>Creators</div>} />
        <Route path="/series" element={<div>Series</div>} />
        <Route path="/stories" element={<div>Stories</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes> 
    </div>
  );
}

export default App;
