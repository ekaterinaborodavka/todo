import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";

const StyledContainer = styled.div`
  font-family: "Segoe UI";
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTaskContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
`;

const StyledSortContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h2`
  width: 10%;
  text-align: end;
  padding-right: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const StyledIcon = styled.i`
  padding: 0.5rem;
  font-size: 1.2rem;
  -webkit-text-stroke: 1px ${COLORS.white};
`;

const StyledButton = styled.button`
  border: 1px solid transparent;
  background-color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
  display: flex;
  align-items: center;
`;

export const MainHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledTaskContainer>
        <StyledTitle>{t("Tasks")}</StyledTitle>
        <StyledButton>
          <StyledIcon className="fa fa-ellipsis-h" />
        </StyledButton>
      </StyledTaskContainer>
      <StyledSortContainer>
        <StyledButton>
          <StyledIcon className="fa fa-arrows-v" />
          {t("Sorting")}
        </StyledButton>
      </StyledSortContainer>
    </StyledContainer>
  );
};
