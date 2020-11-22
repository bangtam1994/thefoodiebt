import styled from "@emotion/styled";

export const Wrapper = styled.div<{
  width: string | number;
  height: string | number;
}>(({ width, height }) => ({
  width: width,
  height: height,
}));
