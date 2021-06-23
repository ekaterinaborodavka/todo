import styled from "styled-components";

import { COLORS } from "~src/colors";

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

export {
  StyledContainer,
  StyledInput,
  StyledIconButton,
  StyledAddButton,
  StyledIconPlus,
  StyledIconCircle,
  StyledForm,
};
