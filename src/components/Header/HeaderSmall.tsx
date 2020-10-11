import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Instagram from "../SocialNetworks/Instagram";
import Facebook from "../SocialNetworks/Facebook";
import Linkedin from "../SocialNetworks/Linkedin";
import ThemeChanger from "../themeChanger";

import "./Header.css";

interface Props {
  siteTitle: string;
}
const HeaderSmall = ({ siteTitle }: Props) => (
  <div className="header-small-wrapper">
    <div className="header-small-container">
      <div className="flex1">
        <i
          className="gg-menu"
          style={{ cursor: "pointer", justifyContent: "flex-start" }}
        />
      </div>

      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="header-title-small">{siteTitle}</div>
      </Link>
      <div
        className="flex1"
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div className="header-small-socials">
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <Instagram />
            <Facebook />
            <Linkedin />
          </span>
        </div>
        <ThemeChanger />
      </div>
    </div>
    <div className="site-small-header-separator" />
  </div>
);

HeaderSmall.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderSmall.defaultProps = {
  siteTitle: ``,
};

export default HeaderSmall;
