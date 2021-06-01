import React, { useState } from "react";
import styled from "styled-components/macro";

import { HeaderTitle, Search, HeaderNav } from "~components";
import { COLORS } from "~src/colors";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.header};
`;

export const Header: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <StyledHeader>
      <HeaderTitle />
      <Search value={value} onChange={setValue} />
      <HeaderNav />
    </StyledHeader>
  );
};
