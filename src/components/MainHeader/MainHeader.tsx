import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { ListOptions, SortList, Popup, OptionButton, SortButton } from "~components";
import { sortVariant } from "~src/utils/utils";

const StyledContainer = styled.div`
  font-family: "Segoe UI";
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  width: 100%;
`;

const StyledTaskContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.color};
`;

const StyledSortContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

const StyledTitle = styled.h2`
  text-align: end;
  padding-right: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const MainHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledTaskContainer>
        <StyledTitle>{t("Tasks")}</StyledTitle>
        <Popup button={OptionButton}>
          <ListOptions />
        </Popup>
      </StyledTaskContainer>
      <StyledSortContainer>
        <Popup button={SortButton}>
          <SortList sortVariant={sortVariant} />
        </Popup>
      </StyledSortContainer>
    </StyledContainer>
  );
};
