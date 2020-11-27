import styled from "@emotion/styled";
// import { mediaQueries } from "../../styles/breakpoints";

export const IconWrapper = styled.div({
  cursor: "pointer",
  display: "flex",
  height: "30px",
  width: "30px",
  justifyContent: "center",
  alignItems: "center",
});

export const ModalBox = styled.div<{ isMenuOpen: boolean }>(
  ({ isMenuOpen }) => ({
    background: "rgba(0, 0, 0, 0.8)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: isMenuOpen ? "flex" : "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  })
);

export const ModalContent = styled.div<{ isMenuOpen: boolean }>(
  ({ isMenuOpen }) => ({
    // background: "white",
    padding: 30,
    width: "300px",
    maxWidth: "100%",
    height: "100%",
    backgroundColor: isMenuOpen ? "pink" : "blue",
    transition: "background 0.3s ease-in-out",
    overflowY: "scroll",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 101,
  })
);

export const H2 = styled.h2({
  fontFamily: "ChunkFive-Regular",
  fontWeight: 800,
  fontSize: "38px",
  color: "black",
});

type BurgerProps = {
  isMenuOpen: boolean;
};

export const StyledBurger = styled.button`
  position: ${({ isMenuOpen }: BurgerProps) =>
    isMenuOpen ? "fixed" : "absolute"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 102;

  &:focus {
    outline: none;
  }

  div {
    width: 1.4rem;
    height: 0.2rem;
    background: ${({ isMenuOpen }: BurgerProps) =>
      isMenuOpen ? "black" : "var(--primary-color)"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ isMenuOpen }: BurgerProps) =>
        isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-of-type(2) {
      opacity: ${({ isMenuOpen }: BurgerProps) => (isMenuOpen ? "0" : "1")};
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-of-type(3) {
      transform: ${({ isMenuOpen }: BurgerProps) =>
        isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ isMenuOpen }: BurgerProps) =>
    isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 350px;
  transition: transform 0.3s ease-in-out;
  z-index: 101;
  @media (max-width: 576px) {
    width: 100%;
    padding: 0;
  }

  a {
    font-size: 18px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--hover-color);
    }
  }
`;
