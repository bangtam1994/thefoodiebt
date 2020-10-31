import styled from "@emotion/styled";

export const Wrapper = styled.div({
  textAlign: "center",
  margin: "90px 0px 16px 0px",
  color: "#666",
  "&>a": {
    fontWeight: 700,
  },
});

export const FooterNavigation = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0px auto",
  color: "#666",
  "&>*": {
    textTransform: "uppercase",
    fontSize: 12,
  },
});

export const NavigationWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  marginTop: 12,
  "& > *": {
    marginRight: 8,
  },
});
