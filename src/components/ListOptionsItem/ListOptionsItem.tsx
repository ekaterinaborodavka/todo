import React, { useContext } from "react";

import { PopupContext } from "~src/context/popupContext";

import { StyledButton, StyledListItem, StyledListText } from "./ListOptionsItem.styled";

export interface ListOptionsItemProps {
  icon: string;
  title: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

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
