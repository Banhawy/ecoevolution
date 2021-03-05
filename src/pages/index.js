import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";
import TitlePage from "../components/TitlePage";
import LocalizedLink from "../components/LocalizedLink";
import useTranslations from "../components/useTranslations";
import useMenu from "../components/useMenu";

import * as S from "../components/ListWrapper/styled";

const Index = ({ data: { allMarkdownRemark } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline, mission, missionText } = useTranslations();
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

      {/* <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                image
              },
              timeToRead,
              fields: { slug }
            }
          }) => (
            <PostItem
              slug={`/blog/${slug}`}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={image}
              key={slug}
            />
          )
        )}
      </S.ListWrapper> */}

      <br />

      {/* <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink> */}
    </div>
  );
};

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
