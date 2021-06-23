import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: "Segoe UI";
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;
  width: 100%;
`;

const StyledTaskContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

const StyledTitle = styled.h2`
  text-align: end;
  padding-right: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

export { StyledContainer, StyledTaskContainer, StyledTitle };
