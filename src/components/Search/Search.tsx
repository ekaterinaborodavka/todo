import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

const StyledSerchContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c3ddf7;
  border-radius: 5px;
  &:hover {
    background-color: white;
  }
`;

const StyledSerch = styled.input`
  width: 80%;
  margin: 0.7rem auto;
  border: none;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: transparent;
  }
  &:focus::placeholder {
    color: grey;
    font-weight: bold;
  }
`;

const StyledIconSearch = styled.i`
  margin-left: 1.5rem;
  color: #4b6fef;
  -webkit-text-stroke: 1px #c3ddf7;
`;
const StyledIconClose = styled.i`
  margin-right: 1.5rem;
  color: #4b6fef;
  -webkit-text-stroke: 1.5px #c3ddf7;
`;

export interface SearchProps {
  // eslint-disable-next-line no-unused-vars
  filterTodos: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ filterTodos }) => {
  const { t } = useTranslation();
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const focusInput = useCallback(() => {
    setFocus(true);
  }, [setFocus]);

  const blurInput = useCallback(() => {
    setFocus(false);
    setValue("");
  }, [setFocus]);

  const onInputChange = useCallback(
    ({ target }) => {
      setValue(target.value);
      filterTodos(target.value);
    },
    [filterTodos]
  );

  return (
    <StyledSerchContainer>
      <StyledIconSearch className="fa fa-search fa-flip-horizontal"></StyledIconSearch>
      <StyledSerch
        type="text"
        placeholder={t("Поиск")}
        onFocus={focusInput}
        onBlur={blurInput}
        onChange={onInputChange}
        value={value}
      />
      {focus ? <StyledIconClose className="fa fa-times"></StyledIconClose> : null}
    </StyledSerchContainer>
  );
};
