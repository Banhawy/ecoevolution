import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import TitlePage from "../components/TitlePage";
import useTranslations from "../components/useTranslations";
import useMenu from "../components/useMenu";
import ContactUs from "../components/ContactUs";
import HeroCard from "../components/HeroCard";

const Index = () => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const { hello, subline, mission, services, missionText } = useTranslations();
    const useMenuItems = useMenu();
    const sectionId = (section) =>
        useMenuItems.filter((menuItem) => menuItem.name.toLowerCase() === section)[0].link.slice(1);

    return (
        <div className="homepage">
            <SEO title="Home" />
            <section className="narrow">
                <TitlePage text={hello} id={sectionId("home")} />
                {/* <p>{subline}</p> */}
                <blockquote className="blockquote">“The Earth is what we all have in common...”
                —Wendell Berry
                </blockquote>
                <hr style={{ margin: `2rem 0` }} />
            </section>

            <section className="narrow">
                <TitlePage text={mission} id={sectionId("mission")} />
                {/* <p>{missionText}</p> */}
                <p>Our goal is to provide day-to-day services to the general public using an environmentally friendly approaches.
    This will ensure that the next generation can live in a clean and beautiful world that we once had.</p>
                <hr style={{ margin: `2rem 0` }} />
            </section>

            <br />

            <section>
                <TitlePage text={services} id={sectionId("services")} />
                <HeroCard />
            </section>

            <br />

            <section className="narrow">
                <hr style={{ margin: `2rem 0` }} />
                <ContactUs id={sectionId("contact")} />
            </section>

        </div>
    );
};

export default Index;

