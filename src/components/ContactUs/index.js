import React from 'react';
import Form from 'customisable-contact-form'
import {
    Heading,
    Name,
    Email,
    Message,
    SubmitButton
} from 'customisable-contact-form'

const ContactUs = () => {
    const theme = {
        primaryFont: "Bookman",
        inputBorderRadius: "13px",
        inputBorderWeight: "1px",
        width: "70%"
    }
    const title = "Contact Us"

    const sendMail = ({ name, email, message }, { target }) => {
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
                    target.reset();
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

export default ContactUs;