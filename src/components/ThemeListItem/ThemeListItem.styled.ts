import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledButton = styled.button<{ colorGradLeft: string; colorGradBottom: string }>`
  background-image: ${(props) => `linear-gradient(to bottom left, ${props.colorGradBottom}, ${props.colorGradLeft})`};
  border: 1px solid transparent;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 0.5rem;
  &:hover {
    border: 1px solid ${COLORS.black};
  }
`;

const StyledIcon = styled.i`
  color: ${COLORS.white};
  font-size: 1.5rem;
  opacity: 0.7;
`;

export { StyledButton, StyledIcon };
