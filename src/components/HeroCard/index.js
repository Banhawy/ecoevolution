import React from 'react';

const HeroCard = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1560037962-08931d95007f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                    alt="Avatar" style={{ width: "100%" }} />
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
    )
}

export default HeroCard;