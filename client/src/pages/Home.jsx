import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SuggestionCard from '../components/SuggestionCard'
import illustrationEmpty from '../assets/suggestions/illustration-empty.svg'


export default function Home({ suggestions }) {

    const [filterCategory, setFilterCategory] = useState("ALL")
    const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions); 

    //console.log(filteredSuggestions, "filtered suggestions")
    function filterState(category) {
        setFilterCategory(category)
        //console.log(category, "category")
        if (category === "ALL") {
            setFilteredSuggestions(suggestions)
        } else {
            const filtering = suggestions.filter((suggestion) => suggestion.category === category)
            setFilteredSuggestions(filtering)
        }
    }

    useEffect(() => {
        setFilteredSuggestions(suggestions);
      }, [suggestions]);

    return (
        <>
            <div className="logo">
                <h1>My Company</h1>
                <h2>Feedback Board</h2>
            </div>

            <div className="suggestionsHeader">
                <img src="../assets/suggestions/icon-suggestions.svg" alt="suggestions Icon" />
                <p>{filteredSuggestions.length} Suggestions</p>
                <Link to="/NewFeedback">
                    <button className="addFeedback">+ Add feedback</button>
                </Link>
            </div>

            <div className="filterContainer">
                {/* filter stuff */}
                <button onClick={() => filterState("ALL")}>ALL</button>
                <button onClick={() => filterState("UI")}>UI</button>
                <button onClick={() => filterState("UX")}>UX</button>
                <button onClick={() => filterState("ENHANCEMENTS")}>Enhancement</button>
                <button onClick={() => filterState("BUG")}>Bug</button>
                <button onClick={() => filterState("FEATURE")}>Feature</button>
            </div>

            <div className="suggestionsContainer">
                {/* cards */}
                {filteredSuggestions && filteredSuggestions.length > 0 ?
                    (filteredSuggestions.map((suggestion, index) => {

                        return (<SuggestionCard suggestion={suggestion} key={index} />
                        )
                    })) : 

                    <>
                        <h2>There is no feedback yet.</h2>

                        <img src={illustrationEmpty} alt="image for empty suggestion area" />

                        <p>Got a suggestion? Found a bug that needs to be squashed?
                            <br />
                            We love hearing about new ideas to improve our app.
                        </p>

                        <Link to="/NewFeedback">
                            <button className="addFeedback">+ Add Feedback</button>
                        </Link>
                    </>
                }
            </div>
        </>
    )
}