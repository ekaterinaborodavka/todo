import styled, { keyframes } from "styled-components/macro";
import { COLORS } from "~src/colors";

const slideLeft = keyframes`
0% {
  transform: translateX(10%);
  opacity: 0;
}      
100% {
  transform: translateX(0%);
} 
`;

const StyledContainer = styled.div<{ isOpened: boolean }>`
  position: absolute;
  z-index: 10;
  height: 93vh;
  width: 25%;
  right: 0;
  top: 100%;
  display: ${(props) => (props.isOpened ? "flex" : "none")};
  flex-direction: column;
  background-color: ${COLORS.bgSidebarRight};
  animation: ${slideLeft} 1s linear;
  border-left: 1px solid ${COLORS.lightGrey};
  box-shadow: -15px 0 15px -15px ${COLORS.lightGrey};
  overflow: auto;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

const StyledTitle = styled.h4`
  width: 90%;
  font-size: 1.2rem;
  margin: 1rem;
  font-family: Segoe UI;
  font-weight: 600;
`;

const StyledCloseButton = styled.button`
  border: 1px solid transparent;
  width: 15%;
  margin: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: transparent;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledIcon = styled.i`
  font-size: 1.5rem;
  -webkit-text-stroke: 3.5px ${COLORS.bgSidebarRight};
`;

const StyledContentContainer = styled.div`
  margin: 1rem;
`;

export { StyledContainer, StyledTitleContainer, StyledTitle, StyledCloseButton, StyledIcon, StyledContentContainer };
