import React from 'react';
import { MDBTypography, MDBIcon } from 'mdbreact';

const HeroCard = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1560037962-08931d95007f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                        alt="Avatar" style={{ width: "100%" }} />
                </div>
            </div>
            <div className="card-container">
                <div className="card card-holder">
                    <h4><b>Mobile App</b></h4>
                    <MDBTypography tag="h3">
                        <strong>Car Wash Business</strong>
                    </MDBTypography>
                    <small className="text-muted">Car Wash Business Description</small>
                    <div className="card-icons">
                        <MDBIcon fab icon="app-store-ios" />
                        <MDBIcon fab icon="android" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroCard;