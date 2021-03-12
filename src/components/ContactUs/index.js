import React, { useState } from 'react';
import Form from 'customisable-contact-form'
import {
    Heading,
    Name,
    Email,
    Message,
    SubmitButton
} from 'customisable-contact-form'
import { MDBTypography } from 'mdbreact';

const Spinner = () => {
    return (
        <>
            <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    );
}


const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isStatusError, setIsStatusError] = useState(false)
    const theme = {
        primaryFont: "Bookman",
        inputBorderRadius: "13px",
        inputBorderWeight: "1px",
        width: "70%"
    }
    const title = "Contact Us"

    const sendMail = ({ name, email, message }, { target }) => {
        setIsLoading(true)
        setIsStatusError(false)
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
            .then(res => {
                if (res.status !== 200) throw new Error(`Error in fetch`)
                return res.json();
            })
            .then(
                result => {
                    setIsLoading(false)
                    setIsSuccess(true)
                    target.reset();
                }
            )
            .catch(
                error => {
                    setIsLoading(false)
                    setIsStatusError(true)
                }
            )
    }
    return (
        <>
            <Form theme={theme} onSubmit={sendMail}>
                <Heading title={title} />
                <Name />
                <Email />
                <Message />
                <SubmitButton buttonTitle={isLoading ? <Spinner /> : 'Submit'} />
                {isSuccess && (<MDBTypography colorText="green">Your message was successfully sent. We'll be in touch with you soon!</MDBTypography>)}
                {isStatusError && (<MDBTypography colorText="red">An error eccoured while sending your message.</MDBTypography>)}
            </Form>
        </>
    )
}

export default ContactUs;