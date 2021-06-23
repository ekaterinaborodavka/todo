import React from "react";

import { HeaderTitle, Search, HeaderNavigation } from "~components";

import { StyledHeader } from "./Header.styled";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderTitle />
      <Search />
      <HeaderNavigation />
    </StyledHeader>
  );
};
