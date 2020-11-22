import { Link } from "gatsby";
import React from "react";
import { H2, ModalBox, StyledMenu } from "./element";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

export const Menu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <>
      <StyledMenu isMenuOpen={isMenuOpen}>
        <Link to="/random_recipe">
          <span role="img" aria-label="price">
            🍳
          </span>
          Recette aléatoire
        </Link>
        <Link to="/aboutme">
          <span role="img">💁‍♀️</span>A propos
        </Link>
        <Link to="/contact">
          <span role="img" aria-label="contact">
            📩
          </span>
          Contact
        </Link>
      </StyledMenu>
      <ModalBox
        isMenuOpen={isMenuOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
          }
        }}
      />
    </>
  );
};
