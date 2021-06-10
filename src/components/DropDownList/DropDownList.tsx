import React from "react";
import styled, { keyframes } from "styled-components/macro";

import { useStateFlags } from "~src/hooks/useStateFlags";
import { COLORS } from "~src/colors";

const slideDown = keyframes`
0% {
  transform: translateY(-10%);
  opacity: 0;
}      
100% {
  transform: translateY(0%);
} 
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0rem;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin: 0.1rem;
  position: relative;
`;

const StyledButton = styled.button`
  position: relative;
  width: 100%;
  border: 1px solid transparent;
  background-color: ${COLORS.white};
  color: ${COLORS.optionText};
  display: flex;
  padding: 1rem;
  justify-content: flex-start;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledListText = styled.span`
  width: 90%;
  text-align: left;
  padding-left: 1rem;
`;

const StyledSubMenuList = styled.ul<{ isShow: boolean }>`
  border-radius: 2px;
  box-shadow: 0px 4px 8px 2px rgba(45, 47, 51, 0.2);
  position: absolute;
  background-color: ${COLORS.white};
  width: 140%;
  left: 100%;
  top: 0;
  z-index: 10;
  padding: 0.6rem;
  display: ${(props) => (props.isShow ? "block" : "none")};
  animation: ${slideDown} 0.7s linear;
`;

export interface DropDownListProps {
  icon: string;
  title: string;
}

export const DropDownList: React.FC<DropDownListProps> = ({ icon, title, children }) => {
  const { flag: isShowSubMenu, setFlagFalse: hideSubMenu, setFlagTrue: showSubMenu } = useStateFlags(false);
  return (
    <StyledList>
      <StyledListItem>
        <StyledButton type="button" onMouseOver={showSubMenu} onMouseOut={hideSubMenu}>
          <i className={icon} />
          <StyledListText>{title}</StyledListText>
          <i className="fa fa-angle-right" />
        </StyledButton>
        {children ? (
          <StyledSubMenuList isShow={isShowSubMenu} onMouseOver={showSubMenu} onMouseOut={hideSubMenu}>
            {children}
          </StyledSubMenuList>
        ) : null}
      </StyledListItem>
    </StyledList>
  );
};
