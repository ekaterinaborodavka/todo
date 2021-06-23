import React, { useContext } from "react";

import { PopupContext } from "~src/context/popupContext";
import { ListOptionsItemProps } from "~src/types";

import { StyledButton, StyledListItem, StyledListText } from "./ListOptionsItem.styled";

export const ListOptionsItem: React.FC<ListOptionsItemProps> = ({ icon, title, onClick }) => {
  const { togglePopup } = useContext(PopupContext);

  return (
    <StyledListItem onClick={togglePopup}>
      <StyledButton type="button" onClick={onClick} data-value={title}>
        <i className={icon} />
        <StyledListText>{title}</StyledListText>
      </StyledButton>
    </StyledListItem>
  );
};
