import React, { useContext, useCallback } from "react";

import { Context } from "~src/context/context";
import { ThemeNames } from "~src/types";

import { StyledButton, StyledIcon } from "./ThemeListItem.styled";

export interface ThemeListItemProps {
  id?: number;
  theme: ThemeNames;
  colorGradBottom: string;
  colorGradLeft: string;
}

// TODO to use styled-themes here
export const ThemeListItem: React.FC<ThemeListItemProps> = ({ colorGradBottom, colorGradLeft, theme }) => {
  const { setThemeVariant, themeVariant } = useContext(Context);

  const onChangeTheme = useCallback(() => {
    setThemeVariant(theme);
  }, [setThemeVariant, theme]);

  return (
    <StyledButton onClick={onChangeTheme} colorGradLeft={colorGradLeft} colorGradBottom={colorGradBottom} type="button">
      {themeVariant === theme ? <StyledIcon className="fa fa-check-circle" /> : null}
    </StyledButton>
  );
};
