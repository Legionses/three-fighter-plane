import React from 'react'
import "./HomePage.css";

const HomePage = ({setMode}) => {
    return(
        <div className="homePage">
            <h1 className="pageTitle yatra-one-regular">Salmson 2</h1>
            <div className="menu">
                <span className="menuItem yatra-one-regular" onClick={() => setMode('play')}>Play</span>
                <span className="menuItem yatra-one-regular" onClick={() => setMode('history')}>History</span>
            </div>
        </div>
    )
}

export default HomePage;