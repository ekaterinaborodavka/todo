import React, { useContext, useCallback, useEffect } from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { SidebarRightContext } from "~src/context/sidebarRightContext";
import { ContentRightSidebar, HeaderButtonsName } from "~src/types";
import { Parameters, Opportunities, Reference } from "~components";

const StyledNavContainer = styled.div`
  width: 10%;
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
`;

const StyledIcons = styled.i`
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: ${(props) => `0.5px ${props.theme.color}`};
`;

const StyledIconsThin = styled.i`
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
          title: "Параметры",
          component: Parameters,
        });
      case HeaderButtonsName.reference:
        return setContentSidebar({
          title: "Справка",
          component: Reference,
        });
      case HeaderButtonsName.opportunities:
        return setContentSidebar({
          title: "Новые возможности",
          component: Opportunities,
        });
      default:
        return setContentSidebar({} as ContentRightSidebar);
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
