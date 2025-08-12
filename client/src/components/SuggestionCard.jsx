import React from 'react';


export default function 
SuggestionCard({ suggestion, children }) {
    return (
    <div className = "card">
        <h3>{suggestion.feedback_title}</h3>
        <p>{suggestion.feedback_detail}</p>
        <button>{suggestion.category}</button>
    </div>
)}