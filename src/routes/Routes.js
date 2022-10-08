import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Add from '../components/Add';
import Update from '../components/Update';
import View from '../components/View';

function WebRoutes() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </Router>
    </>
  );
}

export default WebRoutes;

