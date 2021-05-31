import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";

const StyledSerchContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.search};
  border-radius: 5px;
  &:hover {
    background-color: ${COLORS.white};
  }
`;

const StyledSerch = styled.input`
  width: 80%;
  margin: 0.7rem auto;
  padding-left: 1rem;
  border: none;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: transparent;
  }
  &:focus::placeholder {
    color: ${COLORS.grey};
    font-weight: bold;
  }
  &:focus + i {
    opacity: 1;
  }
`;

const StyledIconSearch = styled.i`
  margin-left: 1.5rem;
  color: ${COLORS.searchIcon};
  -webkit-text-stroke: 1px ${COLORS.search};
`;
const StyledIconClose = styled.i`
  margin-right: 1.5rem;
  color: ${COLORS.searchIcon};
  opacity: 0;
  -webkit-text-stroke: 1.5px ${COLORS.search};
`;

export interface SearchProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  value: string;
}

export const Search: React.FC<SearchProps> = ({ onChange, value }) => {
  const { t } = useTranslation();

  const onInputChange = useCallback(
    ({ target }) => {
      onChange(target.value);
    },
    [onChange]
  );

  const onClearInput = useCallback(() => {
    onChange("");
  }, [onChange]);

  return (
    <StyledSerchContainer>
      <StyledIconSearch className="fa fa-search fa-flip-horizontal"></StyledIconSearch>
      <StyledSerch type="text" placeholder={t("Search")} onChange={onInputChange} value={value} />
      <StyledIconClose className="fa fa-times" onClick={onClearInput}></StyledIconClose>
    </StyledSerchContainer>
  );
};
