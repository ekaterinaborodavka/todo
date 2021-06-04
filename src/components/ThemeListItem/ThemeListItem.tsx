import React, { useContext, useCallback } from "react";
import styled from "styled-components/macro";
import { COLORS } from "~src/colors";
import { MainTitleContext } from "~src/context/mainTitleContext";
import { ThemeNames } from "~src/types";

const StyledButton = styled.button<{ colorGradLeft: string; colorGradBottom: string }>`
  background-image: ${(props) => `linear-gradient(to bottom left, ${props.colorGradBottom}, ${props.colorGradLeft})`};
  border: 1px solid transparent;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 0.5rem;
  &:hover {
    border: 1px solid ${COLORS.black};
  }
`;

const StyledIcon = styled.i`
  color: ${COLORS.white};
  font-size: 1.5rem;
  opacity: 0.7;
`;

export interface ThemeListItemProps {
  id?: number;
  theme: ThemeNames;
  colorGradBottom: string;
  colorGradLeft: string;
}

// TODO to use styled-themes here
export const ThemeListItem: React.FC<ThemeListItemProps> = ({ colorGradBottom, colorGradLeft, theme }) => {
  const { setThemeVariant, themeVariant } = useContext(MainTitleContext);

  const onChangeTheme = useCallback(() => {
    setThemeVariant(theme);
  }, [setThemeVariant, theme]);

  return (
    <StyledButton onClick={onChangeTheme} colorGradLeft={colorGradLeft} colorGradBottom={colorGradBottom} type="button">
      {themeVariant === theme ? <StyledIcon className="fa fa-check-circle" /> : null}
    </StyledButton>
  );
};
