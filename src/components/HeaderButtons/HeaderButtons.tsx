import React, { useContext, useCallback, useEffect } from "react";

import { SidebarRightContext } from "~src/context/sidebarRightContext";
import { SidebarRightContent, HeaderButtonsName, SidebarRightContentTitles } from "~src/types";
import { Parameters, Opportunities, Reference } from "~components";

import { StyledButton, StyledIcons, StyledIconsThin, StyledNavContainer } from "./HeaderButtons.styled";

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
