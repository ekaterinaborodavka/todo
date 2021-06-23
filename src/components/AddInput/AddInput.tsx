import React, { useCallback, useState, useContext, useRef } from "react";
import { useTranslation } from "react-i18next";

import { useStateFlags } from "~src/hooks/useStateFlags";
import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";

import {
  StyledAddButton,
  StyledContainer,
  StyledForm,
  StyledIconButton,
  StyledIconCircle,
  StyledIconPlus,
  StyledInput,
} from "./AddInput.styled";

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
