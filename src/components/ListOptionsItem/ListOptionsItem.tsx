import React, { useContext } from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { PopupContext } from "~src/context/popupContext";

const StyledListItem = styled.li`
  margin: 0.1rem;
  position: relative;
`;

const StyledButton = styled.button`
  width: 100%;
  border: 1px solid transparent;
  background-color: ${COLORS.white};
  color: ${COLORS.optionText};
  padding: 1rem;
  display: flex;
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

export interface ListOptionsItemProps {
  icon: string;
  title: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ListOptionsItem: React.FC<ListOptionsItemProps> = ({ icon, title, onClick }) => {
  const { onClose } = useContext(PopupContext);

  return (
    <StyledListItem onClick={onClose}>
      <StyledButton type="button" onClick={onClick} data-value={title}>
        <i className={icon} />
        <StyledListText>{title}</StyledListText>
      </StyledButton>
    </StyledListItem>
  );
};
