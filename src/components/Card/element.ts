import styled from "@emotion/styled";

export const Wrapper = styled.div({});

export const TitleWrapper = styled.div({
  textAlign: "left",
  lineHeight: 1.3,
  position: "absolute",
  bottom: 0,
  left: "20px",
  maxWidth: "80%",
  display: "inline-block",
});

export const Title = styled.h2({
  color: "#fff",
  fontSize: 24,
  fontFamily: "Futura PT",
  "& > span": {
    backgroundColor: "#000000",
    fontWeight: "bold",
    display: "inline",
    padding: "2px 8px",
  },
});

export const Subtitle = styled.h3({
  color: "#000000",
  fontSize: 12,
  fontWeight: "normal",
  fontFamily: "Futura PT",
  margin: "0px 0px 5px 0px",
  "& > span": {
    backgroundColor: "#fff",
    fontWeight: "bold",
    display: "inline",
    padding: "2px 8px",
  },
});
