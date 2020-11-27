import React from "react";
import { graphql } from "gatsby";

import Loader from "../components/Loader/Loader";

import Layout from "../components/layout";
import Helmet from "react-helmet";
import Button from "../components/Button/Button";
import CardFull from "../components/CardFull/CardFull";

const RandomRecipe = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const [result, setResult] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const allPosts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <CardFull key={edge.node.id} post={edge.node} />);
  const randomize = () => {
    setResult(allPosts[Math.floor(Math.random() * allPosts.length)]);
    setIsLoading(false);
  };

  return (
    <Layout>
      <Helmet>
        <title>Recette aléatoire</title>
        <meta name="recette aléatoire" content={"Recette aléatoire"} />
      </Helmet>
      <div style={{ margin: "20px 0px 40px 0px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}>
          {" "}
          Recette aléatoire
        </h1>
      </div>
      <div
        style={{
          margin: "30px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => {
            setIsLoading(true);
            setTimeout(randomize, 3000);
          }}
        >
          Qu'allez-vous tenter aujourd'hui ?
        </Button>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            margin: "70px 0px",
          }}
        >
          {isLoading ? <Loader /> : result}
        </div>
      </div>
    </Layout>
  );
};
export default RandomRecipe;

export const pageQuery = graphql`
  query randomPageQuery {
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
