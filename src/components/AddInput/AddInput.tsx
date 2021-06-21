import React, { useCallback, useState, useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";

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
  cursor: pointer;
`;

const StyledAddButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.color};
  margin-bottom: 1rem;
  cursor: pointer;
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

const StyledForm = styled.form`
  width: 100%;
  display: flex;
`;

interface AddInputProps {
  placeholder: string | undefined;
  typeOfPages?: string;
}

export const AddInput: React.FC<AddInputProps> = ({ placeholder, typeOfPages = TypeTodo.home }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const { flag: focusInput, setFlagFalse: onBlur, setFlagTrue: onFocus } = useStateFlags(false);
  const { addTodo } = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (value.trim()) {
        addTodo(value, typeOfPages);
        setValue("");
      }
    },
    [value, addTodo, setValue, typeOfPages]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const onBlurInput = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onAddTodo(e);
      onBlur();
    },
    [onBlur, onAddTodo]
  );

  const onFocusInput = useCallback(() => {
    focusInput && !value ? onBlur() : onFocus();
    inputRef.current?.focus();
  }, [onBlur, onFocus, focusInput, value]);

  return (
    <StyledContainer isBorder={focusInput}>
      <StyledIconButton onClick={onFocusInput}>
        {focusInput ? <StyledIconCircle className="fa fa-circle-thin" /> : <StyledIconPlus className="fa fa-plus" />}
      </StyledIconButton>
      <StyledForm onSubmit={onAddTodo}>
        <StyledInput
          ref={inputRef}
          onFocus={onFocus}
          onBlur={onBlurInput}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
        />
        {value ? <StyledAddButton type="submit">{t("Add")}</StyledAddButton> : null}
      </StyledForm>
    </StyledContainer>
  );
};
