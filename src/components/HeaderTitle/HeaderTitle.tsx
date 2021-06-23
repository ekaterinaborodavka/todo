import React from "react";
import { useTranslation } from "react-i18next";

import { StyledTitle } from "./HeaderTitle.styled";

export const HeaderTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <StyledTitle>{t("ToDo")}</StyledTitle>
    </div>
  );
};
