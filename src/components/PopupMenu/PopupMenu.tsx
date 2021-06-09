import React from "react";
import styled, { keyframes } from "styled-components/macro";
import ClickAwayListener from "react-click-away-listener";

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
  font-family: Segoe UI;
  position: relative;
  animation: ${slideDown} 0.5s linear;
`;

interface PopupMenuProps {
  onClose: () => void;
}

export const PopupMenu: React.FC<PopupMenuProps> = ({ onClose, children }) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Wrapper>{children}</Wrapper>
    </ClickAwayListener>
  );
};
