import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Contact from './component/Contact/Contact';
import BuyDatasetPage from './component/BuyDatasetPage/BuyDatasetPage';
import Team from './component/Team/Team';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buy-dataset" element={<BuyDatasetPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
