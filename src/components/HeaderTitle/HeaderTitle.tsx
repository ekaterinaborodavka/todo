import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  width: 10%;
`;

const StyledTitle = styled.span`
  font-family: Segoe UI;
  color: white;
  margin-left: 2rem;
  font-weight: 600;
  line-height: 3rem;
`;

export const HeaderTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledTitle>{t("ToDo")}</StyledTitle>
    </StyledContainer>
  );
};
