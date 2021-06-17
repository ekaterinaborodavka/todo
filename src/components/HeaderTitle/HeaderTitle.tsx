import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

const StyledTitle = styled.span`
  font-family: Segoe UI;
  color: white;
  margin-left: 4rem;
  font-weight: 600;
  line-height: 3rem;
`;

export const HeaderTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <StyledTitle>{t("ToDo")}</StyledTitle>
    </div>
  );
};
