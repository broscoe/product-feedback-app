import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewFeedback from './pages/NewFeedback';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [suggestions, setSuggestions] = useState([]);

  const fetchAllSuggestions = async () => {
    const res = await fetch("/api/get-all-suggestions");
    const data = await res.json();
    setSuggestions(data);
  };
  
  useEffect(() => {
    fetchAllSuggestions();
  }, []);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/NewFeedback">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home suggestions={suggestions} } />
        <Route path="/NewFeedback" element={<NewFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
