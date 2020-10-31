import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/Card/Card";
import NavigationTags from "../components/NavigationTags/NavigationTags";

const tagsList = ["streetfood", "asian", "burger", "pasta", "pastries", "boba"];

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const [tagSelected, setTagSelected] = useState([]);

  const handleOnClick = (item) => {
    let copy = [...tagSelected];
    if (copy.find((el) => el === item)) {
      copy = copy.filter((el) => el !== item);
    } else {
      copy.push(item);
    }
    setTagSelected(copy);
  };

  let Posts;

  if (tagSelected.length === 0) {
    Posts = edges
      .filter((edge) => !!edge.node.frontmatter.date)
      .map((edge) => <Card key={edge.node.id} post={edge.node} />);
  } else {
    Posts = edges
      .filter((edge) => {
        let tagsFromPost = edge.node.frontmatter.tags;
        return tagSelected.every((tag) => tagsFromPost.includes(tag));
      })
      .map((edge) => <Card key={edge.node.id} post={edge.node} />);
  }
  console.log(Posts);

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

      {Posts.length > 0 ? (
        <div className="grids">{Posts}</div>
      ) : (
        <div
          style={{
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Désolé, la recherche n'a donné aucun résultat !
        </div>
      )}
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
            subtitle
            thumbnail
            tags
          }
        }
      }
    }
  }
`;
