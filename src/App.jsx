import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import BoardList from './routes/Boardlist';
import Home from './routes/Home';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
      </Routes>
    );
 
  
}

export default App
