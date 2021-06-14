import React, { useCallback, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { Context } from "~src/context/context";
// import { addNewTodo } from "~src/utils/todoUtils";

const StyledContainer = styled.div<{ isBorder: boolean }>`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) => (props.isBorder ? `1px solid ${props.theme.color}` : `1px solid ${COLORS.lightGrey}`)};
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid transparent;
  outline: none;
  font-size: 1rem;
  margin-bottom: 1rem;
  &::placeholder {
    color: ${(props) => props.theme.color};
  }
  &:focus::placeholder {
    color: ${COLORS.grey};
  }
`;

const StyledIconButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  margin: 0 1rem 1rem 0;
`;

const StyledAddButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.color};
  margin-bottom: 1rem;
`;

const StyledIconPlus = styled.i`
  font-size: 1.5rem;
  -webkit-text-stroke: 3px ${COLORS.white};
  color: ${(props) => props.theme.color};
`;

const StyledIconCircle = styled.i`
  font-size: 1.5rem;
  -webkit-text-stroke: 0.5px ${COLORS.white};
  color: ${COLORS.grey};
`;

export const AddInput: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const { flag: focusInput, setFlagFalse: onBlur, setFlagTrue: onFocus } = useStateFlags(false);
  const { addTodo } = useContext(Context);

  const onAddTodo = useCallback(() => {
    addTodo(value);
    setValue("");
  }, [value, addTodo, setValue]);

  const onInputChange = useCallback(
    ({ target }) => {
      setValue(target.value);
    },
    [setValue]
  );

  return (
    <StyledContainer isBorder={focusInput}>
      <StyledIconButton>
        {focusInput ? <StyledIconCircle className="fa fa-circle-thin" /> : <StyledIconPlus className="fa fa-plus" />}
      </StyledIconButton>
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        placeholder={t("AddTodo")}
        value={value}
        onChange={onInputChange}
      />
      {value ? <StyledAddButton onClick={onAddTodo}>{t("Add")}</StyledAddButton> : null}
    </StyledContainer>
  );
};
