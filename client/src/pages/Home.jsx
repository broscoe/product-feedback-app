export default function Home(suggestions) {
    
    
    return (
        <>
            <div>
                <h1>My Company</h1>
                <h2>Feedback Board</h2>
            </div>

            <div className = "filter-container">
                {/* filter stuff */}
                <button>ALL</button>
                <button>UI</button>
                <button>UX</button>
                <button>Enhancement</button>
                <button>Bug</button>
                <button>Feature</button>
            </div>

            <div className = "suggestion-container">
                {/* cards */}
                <p>suggestions</p>
            </div>
        </>
    )



}
