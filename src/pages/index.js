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

  const PostsRender = React.useMemo(() => {
    let postResult;
    if (tagSelected.length === 0) {
      postResult = edges
        .filter((edge) => {
          return !!edge.node.frontmatter.date;
        })
        .map((edge) => <Card key={edge.node.id} post={edge.node} />);
    } else {
      postResult = edges
        .filter((edge) => {
          let tagsFromPost = edge.node.frontmatter.tags;

          return tagSelected.every((tag) => tagsFromPost.includes(tag));
        })
        .map((edge) => <Card key={edge.node.id} post={edge.node} />);
    }

    return postResult.length > 0 ? (
      <div className="grids">{postResult}</div>
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
    );
  }, [tagSelected, edges]);

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

      {PostsRender}
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
