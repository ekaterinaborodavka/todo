import React from "react";
import styled from "styled-components/macro";

import { HeaderTitle, Search, HeaderNav } from "~components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color};
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderTitle />
      <Search />
      <HeaderNav />
    </StyledHeader>
  );
};
