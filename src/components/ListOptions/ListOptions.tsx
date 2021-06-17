import React from "react";
import styled from "styled-components/macro";

import { ListOptionsItem, ListOptionsItemProps } from "~components";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export interface ListOptionsProps {
  options: ListOptionsItemProps[];
  // eslint-disable-next-line no-unused-vars
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ListOptions: React.FC<ListOptionsProps> = ({ options, onClick }) => {
  return (
    <StyledList>
      {options.map((option) => (
        <ListOptionsItem key={option.title} {...option} onClick={onClick} />
      ))}
    </StyledList>
  );
};
