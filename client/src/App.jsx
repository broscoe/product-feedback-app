import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewFeedback from './pages/NewFeedback';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [suggestions, setSuggestions] = useState([]);

  const fetchAllSuggestions = async () => {
    try {
    const res = await fetch("/api/get-all-suggestions");
    const data = await res.json();
    setSuggestions(data);
  } catch (err) {
    console.error("api error:", err)
  }
  };
  
  useEffect(() => {
    fetchAllSuggestions();
  }, []);
  
  return (
      <Routes>
        <Route path="/" element={<Home suggestions={suggestions} />} />
        <Route path="/NewFeedback" element={<NewFeedback />} />
      </Routes>
  );
}

export default App;
