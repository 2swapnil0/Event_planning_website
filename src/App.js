import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BillPage from './pages/BillPage.tsx'; // Import the new component
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bill" element={<BillPage />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
