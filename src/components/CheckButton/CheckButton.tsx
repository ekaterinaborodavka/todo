import React, { useCallback } from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { COLORS } from "~src/colors";
import { toggleCheckButton } from "~src/utils/todoUtils";
import { ParametersItem } from "~src/types";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button<{ check: boolean }>`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  transition: all 0.5s ease 0s;
  border: ${(props) => (props.check ? "1px solid transparent" : `1px solid ${COLORS.grey}`)};
  background-color: ${(props) => (props.check ? COLORS.blue : COLORS.white)};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 3px;
  justify-content: ${(props) => (props.check ? "flex-end" : "flex-start")};
  &:hover {
    background-color: ${(props) => (props.check ? COLORS.checkButtonHover : COLORS.white)};
    border: ${(props) => (props.check ? "1px solid transparent" : `1px solid ${COLORS.black}`)};
  }
`;

const StyledCheck = styled.span<{ check: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: all 0.5s ease 0s;
  background-color: ${(props) => (props.check ? COLORS.white : COLORS.grey)};
  &:hover {
    background-color: ${(props) => (props.check ? COLORS.white : COLORS.black)};
  }
`;

const StyledCheckStatus = styled.span`
  margin-left: 1rem;
  font-size: 0.9rem;
`;

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
