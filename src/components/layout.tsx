import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";
import HeaderSmall from "./Header/HeaderSmall";
import HeaderBig from "./Header/HeaderBig";
import "../styles/global.scss";
import "prismjs/themes/prism-okaidia.css";

interface Props {
  children?: any;
  isLandingPage?: boolean;
}

const Layout = ({ children, isLandingPage = false }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className="site-wrapper">
      {isLandingPage ? (
        <HeaderBig title={data.site.siteMetadata.title} />
      ) : (
        <HeaderSmall siteTitle={data.site.siteMetadata.title} />
      )}
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} The Foodie BT &bull; Crafted with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://linkedin.com/in/bangtamnguyen">Bang-Tam NGUYEN</a>
        </p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
