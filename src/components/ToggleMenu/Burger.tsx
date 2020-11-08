import React from "react";
import { H2, StyledBurger } from "./element";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

export const Burger = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        position: isMenuOpen ? "fixed" : "initial",
        left: 30,
        width: isMenuOpen ? "100%" : "0",
        height: 30,
        zIndex: 999,
      }}
    >
      <StyledBurger
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      {isMenuOpen && (
        <H2 style={{ zIndex: 999, marginLeft: 44 }}>the foodie BT</H2>
      )}
    </div>
  );
};
