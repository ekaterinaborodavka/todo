import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledIcon = styled.i<{ color: string }>`
  color: ${(props) => props.color};
`;

const StyledItem = styled.li`
  padding: 0.5rem 1.5rem;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledTitle = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  margin-left: 2rem;
  width: 85%;
  white-space: nowrap;
`;

const StyledCount = styled.div`
  width: 10%;
  font-size: 0.8rem;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
`;

export { StyledIcon, StyledItem, StyledTitle, StyledCount, StyledContent, StyledLink };
