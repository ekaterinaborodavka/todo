import React, { useContext, useCallback, useEffect } from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { SidebarRightContext } from "~src/context/sidebarRightContext";
import { SidebarRightContent, HeaderButtonsName, SidebarRightContentTitles } from "~src/types";
import { Parameters, Opportunities, Reference } from "~components";

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 33%;
  padding: 0.7rem;
  background-color: transparent;
  border: 1px solid transparent;
  &:hover {
    background-color: ${COLORS.lightGrey};
    opacity: 0.5;
  }
  &:active {
    background-color: ${COLORS.grey};
  }
`;

const StyledIcons = styled.i`
  padding: 0.3rem;
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: ${(props) => `0.5px ${props.theme.color}`};
`;

const StyledIconsThin = styled.i`
  padding: 0.3rem;
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: ${(props) => `2px ${props.theme.color}`};
`;

export const HeaderButtons: React.FC = () => {
  const { openSidebar, closeSidebar, currentButton, setCurrentButton, setContentSidebar } =
    useContext(SidebarRightContext);

  //TODO: you need to implement the components: Parameters, Reference, Opportunities
  useEffect(() => {
    switch (currentButton) {
      case HeaderButtonsName.parameters:
        return setContentSidebar({
          title: SidebarRightContentTitles.parameters,
          component: Parameters,
        });
      case HeaderButtonsName.reference:
        return setContentSidebar({
          title: SidebarRightContentTitles.reference,
          component: Reference,
        });
      case HeaderButtonsName.opportunities:
        return setContentSidebar({
          title: SidebarRightContentTitles.opportunities,
          component: Opportunities,
        });
      default:
        return setContentSidebar({} as SidebarRightContent);
    }
  }, [currentButton, setContentSidebar]);

  const onOpenSidebar = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setCurrentButton(e.currentTarget.name);
      if (e.currentTarget.name === currentButton) {
        closeSidebar();
        setCurrentButton("");
        return;
      }
      openSidebar();
    },
    [setCurrentButton, currentButton, closeSidebar, openSidebar]
  );

  return (
    <StyledNavContainer>
      <StyledButton name={HeaderButtonsName.parameters} type="button" onClick={onOpenSidebar}>
        <StyledIconsThin className="fa fa-cog" />
      </StyledButton>
      <StyledButton name={HeaderButtonsName.reference} type="button" onClick={onOpenSidebar}>
        <StyledIconsThin className="fa fa-question" />
      </StyledButton>
      <StyledButton name={HeaderButtonsName.opportunities} type="button" onClick={onOpenSidebar}>
        <StyledIcons className="fa fa-television" />
      </StyledButton>
    </StyledNavContainer>
  );
};
