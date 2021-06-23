import React from "react";
import ClickAwayListener from "react-click-away-listener";

import { Wrapper } from "./PopupContent.styled";

interface PopupContentProps {
  onClose: () => void;
}

export const PopupContent: React.FC<PopupContentProps> = ({ onClose, children }) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Wrapper>{children}</Wrapper>
    </ClickAwayListener>
  );
};
