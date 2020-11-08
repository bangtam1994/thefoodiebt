import { Link } from "gatsby";
import React from "react";
import Facebook from "../SocialNetworks/Facebook";
import Instagram from "../SocialNetworks/Instagram";
import Linkedin from "../SocialNetworks/Linkedin";
import { FooterNavigation, Wrapper, NavigationWrapper } from "./element";

const FooterBig = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} The Foodie BT &bull; Crafted with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <Link to="/aboutme">Bang-Tam NGUYEN</Link>
      </p>
      <FooterNavigation>
        <Link to={"/contact"}>Contact</Link>{" "}
        <span style={{ margin: "0px 20px" }}>|</span>
        <Link to={"/aboutme"}>A propos</Link>
      </FooterNavigation>
      <NavigationWrapper>
        <Instagram />
        <Facebook />
        <Linkedin />
      </NavigationWrapper>
    </Wrapper>
  );
};

export default FooterBig;
