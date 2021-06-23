import styled from "styled-components";
import { COLORS } from "~src/colors";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button<{ check: boolean }>`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  transition: all 0.5s ease 0s;
  border: ${(props) => (props.check ? "1px solid transparent" : `1px solid ${COLORS.grey}`)};
  background-color: ${(props) => (props.check ? COLORS.blue : COLORS.white)};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 3px;
  justify-content: ${(props) => (props.check ? "flex-end" : "flex-start")};
  &:hover {
    background-color: ${(props) => (props.check ? COLORS.checkButtonHover : COLORS.white)};
    border: ${(props) => (props.check ? "1px solid transparent" : `1px solid ${COLORS.black}`)};
  }
`;

const StyledCheck = styled.span<{ check: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: all 0.5s ease 0s;
  background-color: ${(props) => (props.check ? COLORS.white : COLORS.grey)};
  &:hover {
    background-color: ${(props) => (props.check ? COLORS.white : COLORS.black)};
  }
`;

const StyledCheckStatus = styled.span`
  margin-left: 1rem;
  font-size: 0.9rem;
`;

export { StyledContainer, StyledButton, StyledCheck, StyledCheckStatus };
