import React from "react";
import ClickAwayListener from "react-click-away-listener";

import { PopupContentProps } from "~src/types";

import { Wrapper } from "./PopupContent.styled";

export const PopupContent: React.FC<PopupContentProps> = ({ onClose, children }) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Wrapper>{children}</Wrapper>
    </ClickAwayListener>
  );
};
