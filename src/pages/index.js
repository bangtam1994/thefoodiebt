import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import NavigationTags from "../components/NavigationTags/NavigationTags";

const tagsList = ["Tous", "Street Food", "Coréen", "Burger"];

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const [tagSelected, setTagSelected] = useState([tagsList[0]]);

  console.log(edges);
  const handleOnClick = (item) => {
    let copy = [...tagSelected];
    console.log(item);
    if (copy.find((el) => el === item)) {
      copy = copy.filter((el) => el !== item);
    } else {
      copy.push(item);
    }
    console.log(copy);
    setTagSelected(copy);
  };

  const Posts = edges
    .filter((edge) => edge.node.frontmatter.tags.indexOf(tagSelected) !== -1)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  // edge.node.frontmatter.tags.indexOf(tagSelected) !== -1)
  // You can filter your posts based on some criteria

  return (
    <Layout isLandingPage={true}>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>

      <NavigationTags
        handleOnClick={handleOnClick}
        tagsList={tagsList}
        tagSelected={tagSelected}
      />

      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            tags
          }
        }
      }
    }
  }
`;
