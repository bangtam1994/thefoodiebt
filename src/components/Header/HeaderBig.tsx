import { Link } from "gatsby";
import React from "react";
import "./Header.css";
import Navigation from "../navigation";
import { mediaQueries } from "../../styles/breakpoints";

interface Props {
  title: string;
}

const HeaderBig = ({ title }: Props) => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <div className="site-header">
      <div className="site-title">
        <i className="gg-menu" style={{ cursor: "pointer" }}></i>

        <Link
          to="/"
          style={{
            [mediaQueries.tabletLandscapeUp]: {
              width: "300px",
              backgroundColor: "pink",
            },
          }}
        >
          {title}
        </Link>
      </div>
      <Navigation />
    </div>
    <div className="site-header-separator" />
  </div>
);

export default HeaderBig;
