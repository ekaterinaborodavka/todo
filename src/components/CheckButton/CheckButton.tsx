import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { toggleCheckButton } from "~src/utils/todoUtils";
import { ParametersItem } from "~src/types";

import { StyledButton, StyledCheck, StyledCheckStatus, StyledContainer } from "./CheckButton.styled";

interface CheckButtonProps {
  status: boolean;
  id: number;
  params: ParametersItem[];
  setParams: React.Dispatch<React.SetStateAction<ParametersItem[]>>;
}

export const CheckButton: React.FC<CheckButtonProps> = ({ status, id, params, setParams }) => {
  const { t } = useTranslation();

  const onToggleCheckButton = useCallback(() => {
    setParams(toggleCheckButton(id, params));
  }, [setParams, id, params]);

  return (
    <StyledContainer>
      <StyledButton check={status} onClick={onToggleCheckButton}>
        <StyledCheck check={status}></StyledCheck>
      </StyledButton>
      <StyledCheckStatus>{status ? t("On") : t("Off")}</StyledCheckStatus>
    </StyledContainer>
  );
};
