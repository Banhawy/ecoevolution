import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import TitlePage from "../components/TitlePage";
import useTranslations from "../components/useTranslations";
import useMenu from "../components/useMenu";
import Form from 'customisable-contact-form'
import {
    Heading,
    Name,
    Email,
    Message,
    SubmitButton
} from 'customisable-contact-form'

const Index = () => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const { hello, subline, mission, services, missionText } = useTranslations();
    const useMenuItems = useMenu();
    const sectionId = (section) =>
        useMenuItems.filter((menuItem) => menuItem.name === section).link;

    return (
        <div className="homepage">
            <SEO title="Home" />
            <TitlePage text={hello} id={sectionId("home")} />
            {/* <p>{subline}</p> */}
            <blockquote className="blockquote">“The Earth is what we all have in common...”
            —Wendell Berry
            </blockquote>
            <hr style={{ margin: `2rem 0` }} />
            <TitlePage text={mission} id={sectionId("mission")} />
            {/* <p>{missionText}</p> */}
            <p>Our goal is to provide day-to-day services to the general public using an environmentally friendly approaches.
This will ensure that the next generation can live in a clean and beautiful world that we once had.</p>
            <hr style={{ margin: `2rem 0` }} />

            <br />
            <TitlePage text={services} id={sectionId("services")} />
            <div className="card-container">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
            <hr style={{ margin: `2rem 0` }} />

            <br />

            <ContactUs />

        </div>
    );
};

function ContactUs() {
    const theme = {
        primaryFont: "Bookman",
        inputBorderRadius: "13px",
        inputBorderWeight: "1px",
        width: "70%"
    }
    const title = "Contact Us"

    const sendMail = ({ name, email, message }) => {
        const raw = JSON.stringify({
            senderEmail: email,
            senderName: `${name}`,
            message
        })
        let requestOptions = {
            method: 'POST',
            body: raw
        };
        fetch('https://3bayg0kecg.execute-api.me-south-1.amazonaws.com/default/sendEcoevolutionMail',
            requestOptions
        )
            .then(res => res.status === 200 ? res.json() : new Error(`Error in fetch: ${res}`))
            .then(
                result => {
                    console.log('Result:', result)
                }
            )
            .catch(
                error => console.log('Error: ', error)
            )
    }
    return (
        <>
            <Form theme={theme} onSubmit={sendMail}>
                <Heading title={title} />
                <Name />
                <Email />
                <Message />
                <SubmitButton />
            </Form>
        </>
    )
}

export default Index;

