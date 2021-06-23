import React from "react";

import { useStateFlags } from "~src/hooks/useStateFlags";
import { DropDownListProps } from "~src/types";

import { StyledButton, StyledList, StyledListItem, StyledListText, StyledSubMenuList } from "./DropDownList.styled";

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
