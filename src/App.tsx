import React from "react";
import styled from "styled-components/macro";

import { Header, MainHeader, SidebarLeft } from "~components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`;

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <SidebarLeft />
        <MainHeader />
      </StyledContainer>
    </>
  );
};
