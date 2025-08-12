import React from 'react';
import { Link } from 'react-router-dom';
import SuggestionCard from '../components/SuggestionCard'
import illustrationEmpty from '../assets/suggestions/illustration-empty.svg'

export default function Home({ suggestions }) {


    return (
        <>
            <div>
                <h1>My Company</h1>
                <h2>Feedback Board</h2>
            </div>

            <div><Link to="/NewFeedback">
                <button > Add feedback</button>
            </Link></div>

            <div className="filter-container">
                {/* filter stuff */}
                <button>ALL</button>
                <button>UI</button>
                <button>UX</button>
                <button>Enhancement</button>
                <button>Bug</button>
                <button>Feature</button>
            </div>

            <div className="suggestion-container">
                {/* cards */}
                {suggestions && suggestions.length > 0 ?
                    (suggestions.map((suggestion, index) => {
                         
                        return (<SuggestionCard suggestion={suggestion} key={index} />
                        )
                    })) : <>
                        <h2>There is no feedback yet.</h2>
                        <img src={illustrationEmpty} alt="image for empty suggestion area" />
                        <p>Got a suggestion? Found a bug that needs to be squashed?
                             <br /> 
                             We love hearing about new ideas to improve our app.
                        </p>
                    </>
                }
            </div>
        </>
    )
}
