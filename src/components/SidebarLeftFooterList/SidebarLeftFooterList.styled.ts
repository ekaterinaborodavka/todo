import styled from "styled-components/macro";

const StyledList = styled.div<{ isOpened: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.isOpened ? "row" : "column")};
`;

export { StyledList };
