import styled from "@emotion/styled";

export const WrapperPost = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const TitleWrapper = styled.div({
  textAlign: "center",
  lineHeight: 1.3,
  bottom: 0,
  left: "20px",
  maxWidth: "80%",
  display: "inline-block",
});

export const Title = styled.h2({
  color: "#fff",
  fontSize: 28,
  fontFamily: "Futura PT",
  "& > span": {
    backgroundColor: "#121212",
    fontWeight: "bold",
    display: "inline",
    padding: "2px 8px",
  },
});

export const Image = styled.img({
  height: 600,
  width: 800,
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: 5,
  "&:hover": {
    width: 850,
    height: 640,
    transition: "0.3s",
  },
});
