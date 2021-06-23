import React from "react";

import { ListOptionsItem } from "~components";
import { ListOptionsProps } from "~src/types";

import { StyledList } from "./ListOptions.styled";

export const ListOptions: React.FC<ListOptionsProps> = ({ options, onClick }) => {
  return (
    <StyledList>
      {options.map((option) => (
        <ListOptionsItem key={option.title} {...option} onClick={onClick} />
      ))}
    </StyledList>
  );
};
