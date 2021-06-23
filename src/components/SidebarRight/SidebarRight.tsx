import React from "react";

import { Icons } from "~src/utils/utils";
import { SidebarRightProps } from "~src/types";

import {
  StyledContainer,
  StyledTitleContainer,
  StyledTitle,
  StyledCloseButton,
  StyledIcon,
  StyledContentContainer,
} from "./SidebarRight.styled";

export const SidebarRight: React.FC<SidebarRightProps> = ({ content, isOpen, onClose }) => {
  const { title, component: Content } = content;
  return (
    <StyledContainer isOpened={isOpen}>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledCloseButton type="button" onClick={onClose}>
          <StyledIcon className={Icons.close} />
        </StyledCloseButton>
      </StyledTitleContainer>
      <StyledContentContainer>{Content ? <Content /> : null}</StyledContentContainer>
    </StyledContainer>
  );
};
