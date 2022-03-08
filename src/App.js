import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientOne from './ClientOne';
import ClientTwo from './ClientTwo';
import CustomMediumTerm from './components/CustomMediumTerm';
import CustomShortTerm from './components/CustomShortTerm';
import Home from './Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>

          <Route exact path="/client/1" element={<ClientOne />} />
          <Route exact path="/client/2" element={<ClientTwo />} />
          <Route exact path="/dynmedium" element={<CustomMediumTerm />} />
          <Route exact path="/dynshort" element={<CustomShortTerm />} />
          <Route exact path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//dynmedium