import React, { useState, useCallback } from "react";
import styled from "styled-components/macro";

import { SidebarLeftContentList, SidebarLeftFooterList } from "~components";
import { sidebarContent, sidebarFooter } from "~src/utils/utils";
import { COLORS } from "~src/colors";

const StyledSidebar = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "20%" : "4%")};
  background-color: ${COLORS.bgSidebarLeft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledIconArrow = styled.i`
  color: ${COLORS.blue};
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const StyledIconPlus = styled.i`
  color: ${COLORS.blue};
  -webkit-text-stroke: 2.5px ${COLORS.bgSidebarLeft};
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  width: 10%;
  border: 1px solid transparent;
  background-color: ${COLORS.bgSidebarLeft};
  margin: 0 0.6rem;
`;

export const SidebarLeft: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const onOpenSidebar = useCallback(() => {
    setOpenSidebar(!openSidebar);
  }, [setOpenSidebar, openSidebar]);

  return (
    <StyledSidebar open={openSidebar}>
      <StyledContent>
        <StyledButton onClick={onOpenSidebar}>
          <StyledIconArrow className={`fa fa-angle-right ${openSidebar ? "fa-flip-horizontal" : null}`} />
        </StyledButton>
        <SidebarLeftContentList content={sidebarContent} />
        <StyledButton>
          <StyledIconPlus className="fa fa-plus" />
        </StyledButton>
      </StyledContent>
      <SidebarLeftFooterList open={openSidebar} content={sidebarFooter} />
    </StyledSidebar>
  );
};
