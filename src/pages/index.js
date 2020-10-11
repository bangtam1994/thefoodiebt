import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import NavigationTags from "../components/NavigationTags/NavigationTags";

const tagsList = ["streetfood", "koreanfood", "burger", "pasta"];

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
      .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  } else {
    Posts = edges
      .filter((edge) => {
        let tagsFromPost = edge.node.frontmatter.tags;
        return tagSelected.every((tag) => tagsFromPost.includes(tag));
      })
      .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  }

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
