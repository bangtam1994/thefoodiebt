import styled from "@emotion/styled";
import { mediaQueries } from "../../styles/breakpoints";

export const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "85%",
  textTransform: "uppercase",
  fontSize: 13,
  fontFamily: "Futura PT",
  letterSpacing: "1.4px",
  fontWeight: "bold",
  [mediaQueries.phoneOnly]: {
    fontSize: 12,
    flexWrap: "wrap",
    margin: "10px 0px",
    textAlign: "center",
    "&>div": {
      flexBasis: "25%",
    },
  },
});

export const NavigationWrapper = styled.div`
  width: 100%;
  background-color: var(--background);
  position: sticky;
  z-index: 99;
  min-height: 50px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--primary-color);
`;
