import styled, { keyframes } from "styled-components/macro";

const slideDown = keyframes`
0% {
  transform: translateY(-10%);
  opacity: 0;
}      
100% {
  transform: translateY(0%);
} 
`;

const Wrapper = styled.span`
  position: relative;
  animation: ${slideDown} 0.5s linear;
`;

export { Wrapper };
