import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Instagram from "../SocialNetworks/Instagram";
import Facebook from "../SocialNetworks/Facebook";
import Linkedin from "../SocialNetworks/Linkedin";
import ThemeChanger from "../themeChanger";

import "./Header.css";
import {
  SmallHeaderContainer,
  SmallHeaderSeparator,
  SmallHeaderSocials,
  SmallHeaderTitle,
  SmallHeaderWrapper,
} from "./element";
import ToggleMenu from "../ToggleMenu/ToggleMenu";

interface Props {
  siteTitle: string;
}
const HeaderSmall = ({ siteTitle }: Props) => (
  <SmallHeaderWrapper>
    <SmallHeaderContainer>
      <div style={{ display: "flex", flex: "1" }}>
        <ToggleMenu />
      </div>

      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <SmallHeaderTitle>{siteTitle}</SmallHeaderTitle>
      </Link>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <SmallHeaderSocials>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <Instagram />
            <Facebook />
            <Linkedin />
          </span>
        </SmallHeaderSocials>
        <ThemeChanger />
      </div>
    </SmallHeaderContainer>
    <SmallHeaderSeparator />
  </SmallHeaderWrapper>
);

HeaderSmall.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderSmall.defaultProps = {
  siteTitle: ``,
};

export default HeaderSmall;
