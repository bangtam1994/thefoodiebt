import { Link } from "gatsby";
import React from "react";
import "./Header.css";
import Navigation from "../navigation";
import { HeaderSeparator, HeaderTitleWrapper, HeaderWrapper } from "./element";
import ThemeChanger from "../themeChanger";
import { useWindowSize } from "../../utils/MediaQueries";
interface Props {
  title: string;
}

const HeaderBig = ({ title }: Props) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HeaderWrapper>
        <HeaderTitleWrapper>
          <i className="gg-menu" style={{ cursor: "pointer" }}></i>
          <Link to="/">{title}</Link>
        </HeaderTitleWrapper>
        {!isMobile && <Navigation />}
        <ThemeChanger />
      </HeaderWrapper>
      <HeaderSeparator />
    </div>
  );
};

export default HeaderBig;
