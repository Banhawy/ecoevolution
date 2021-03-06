import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";
import TitlePage from "../components/TitlePage";
import LocalizedLink from "../components/LocalizedLink";
import useTranslations from "../components/useTranslations";
import useMenu from "../components/useMenu";
import Form from 'customisable-contact-form'
import {
    Heading,
    FirstName,
    LastName,
    Email,
    Message,
    SubmitButton
} from 'customisable-contact-form'

import * as S from "../components/ListWrapper/styled";
import { Contact } from "styled-icons/boxicons-solid";

const Index = ({ data: { allMarkdownRemark } }) => {
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
            <p>{subline}</p>
            <hr style={{ margin: `2rem 0` }} />
            <TitlePage text={mission} id={sectionId("mission")} />
            <p>{missionText}</p>
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
    return (
        <>
             <Form theme={theme}>
                <Heading title={title} />
                <FirstName />
                <LastName />
                <Email />
                <Message />
                <SubmitButton />
            </Form>
        </>
    )
}

export default Index;

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
