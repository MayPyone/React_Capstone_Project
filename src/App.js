import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './component/Detail';
import DisplayHome from './component/DisplayHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DisplayHome />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;