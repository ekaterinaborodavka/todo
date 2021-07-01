import styled from "styled-components/macro";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color};
  position: relative;
`;

export { StyledHeader };
