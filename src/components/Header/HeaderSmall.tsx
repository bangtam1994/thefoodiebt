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
  <div className="header-small-container">
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      <div className="header-title-small">{siteTitle}</div>
    </Link>

    <div className="header-small-socials">
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <Instagram />
        <Facebook />
        <Linkedin />
      </span>
    </div>
    <ThemeChanger />
  </div>
);

HeaderSmall.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderSmall.defaultProps = {
  siteTitle: ``,
};

export default HeaderSmall;
