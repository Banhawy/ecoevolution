import React from 'react';
import { MDBTypography, MDBIcon, MDBView, MDBMask, MDBAnimation } from 'mdbreact';

const HeroCard = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <AnimatedCard />
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

const AnimatedCard = () => (
    <MDBAnimation reveal type="slideInLeft" count={1}>
        <MDBView hover>
            <img src="https://images.unsplash.com/photo-1560037962-08931d95007f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                alt="Avatar" style={{ width: "100%" }} />
            <MDBMask className="flex-center" overlay="green-light">
                <ol className="white-text">
                    <li>
                        <MDBTypography tag="h3" variant="h2" colorText="white">Bullet points are lame</MDBTypography>
                    </li>
                    <li>
                        <MDBTypography tag="h3" variant="h2" colorText="white">Bullet points are lame</MDBTypography>
                    </li>
                    <li>
                        <MDBTypography tag="h3" variant="h2" colorText="white">Bullet points are lame</MDBTypography>
                    </li>
                </ol>
            </MDBMask>
        </MDBView>
    </MDBAnimation>
)

export default HeroCard;