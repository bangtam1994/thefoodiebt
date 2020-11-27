// import { Link } from "gatsby";
import React from "react";
import { ModalBox, ModalContent, H2, IconWrapper } from "./element";
import { useWindowSize } from "../../utils/MediaQueries";
import { Burger } from "./Burger";
import { Menu } from "./Menu";

const ToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;
  return (
    <>
      {/* <IconWrapper
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <i className="gg-menu" />
      </IconWrapper> */}

      <Burger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* <ModalBox
        isMenuOpen={isMenuOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
          }
        }}
      >
        <ModalContent isMenuOpen={isMenuOpen}>
          <H2>the Foodie BT</H2>
        </ModalContent>
      </ModalBox> */}
    </>
  );
};

export default ToggleMenu;
