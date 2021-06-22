import React from "react";
import styled, { keyframes } from "styled-components/macro";
import ClickAwayListener from "react-click-away-listener";
import { PopupContext } from "~src/context/popupContext";

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

interface PopupContentProps {
  onClose: () => void;
}

export const PopupContent: React.FC<PopupContentProps> = ({ onClose, children }) => {
  return (
    <PopupContext.Provider value={{ onClose }}>
      <ClickAwayListener onClickAway={onClose}>
        <Wrapper>{children}</Wrapper>
      </ClickAwayListener>
    </PopupContext.Provider>
  );
};
