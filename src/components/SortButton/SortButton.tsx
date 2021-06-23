import React from "react";
import { useTranslation } from "react-i18next";

import { StyledButton, StyledIcon } from "./SortButton.styled";

interface SortButtonProps {
  onClick: () => void;
}

export const SortButton: React.FC<SortButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon className="fa fa-arrows-v" />
      {t("Sorting")}
    </StyledButton>
  );
};
