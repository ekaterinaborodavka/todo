import styled from "styled-components";
import { COLORS } from "~src/colors";

const StyledContainer = styled.div<{ isShow: boolean }>`
  width: 30%;
  background-color: ${COLORS.bgDetailsMenu};
  height: 100%;
  display: ${(props) => (props.isShow ? "flex" : "none")};
  transition: all 0.5s linear;
  position: relative;
`;

const StyledFooterWrapper = styled.div`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  overflow: auto;
`;

export { StyledContainer, StyledFooterWrapper, StyledContentWrapper };
