import styled from "@emotion/styled";
import { mediaQueries } from "../../styles/breakpoints";

export const HeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "46px 0px 32px 0px",
  width: "100%",
});

export const HeaderTitleWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  "&>a": {
    textDecoration: "none",
    transition: "color 0.5s ease-in-out",
    marginLeft: 58,
    fontWeight: 500,
    fontFamily: "ChunkFive-Regular",
    fontSize: 76,
    [mediaQueries.tabletLandscapeUp]: {
      fontSize: 54,
    },
    [mediaQueries.phoneOnly]: {
      fontSize: 44,
    },
  },
});

export const HeaderSeparator = styled.div`
  width: 100%;
  margin: 0px 10px;
  background-color: var(--primary-color);
  height: 3px;
`;

////// SMALL

export const SmallHeaderWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 32,
  transition: "color 0.5s ease-in-out",
});

export const SmallHeaderContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 60,
  width: "100%",
});

export const SmallHeaderTitle = styled.div`
  color: var(--primary-color);
  font-family: "ChunkFive-Regular";
  font-size: 25px;
  flex: 1;
  display: "flex";
  justify-content: "center";
  transition: color 0.5s ease-in-out;
`;

export const SmallHeaderSocials = styled.div({
  right: 50,
  width: 90,
  transition: "color 0.5s ease-in-out",
  [mediaQueries.phoneOnly]: {
    display: "none",
  },
});

export const SmallHeaderSeparator = styled.div`
  width: 100%;
  background-color: var(--primary-color);
  height: 2px;
`;
