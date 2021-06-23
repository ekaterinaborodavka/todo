import React from "react";

import { ListOptionsItem } from "~components";
import { ListOptionsItemProps } from "~components/ListOptionsItem/ListOptionsItem";

import { StyledList } from "./ListOptions.styled";

interface ListOptionsProps {
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
