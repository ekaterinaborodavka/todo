import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledSidebar = styled.div<{ isOpened: boolean }>`
  width: ${(props) => (props.isOpened ? "25%" : "70px")};
  transition: all 0.2s linear;
  background-color: ${COLORS.bgSidebarLeft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
`;

const StyledContent = styled.div<{ isOpened: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: ${(props) => (props.isOpened ? "overlay" : "hidden")};
`;

const StyledIconArrow = styled.i`
  color: ${COLORS.blue};
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const StyledIconPlus = styled.i`
  color: ${COLORS.blue};
  -webkit-text-stroke: 2.5px ${COLORS.bgSidebarLeft};
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  width: 50px;
  margin-left: 0.4rem;
  border: 1px solid transparent;
  background-color: ${COLORS.bgSidebarLeft};
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
  cursor: pointer;
`;

const StyledCreateTitle = styled.span`
  color: ${COLORS.blue};
  padding: 0.5rem 1rem;
  white-space: nowrap;
`;

const StyledCreate = styled.div`
  display: flex;
`;

const StyledCreateInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  background-color: ${COLORS.bgSidebarLeft};
  outline: none;
  font-size: 1rem;
  font-family: Segoe UI;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
`;

export {
  StyledSidebar,
  StyledContent,
  StyledIconArrow,
  StyledIconPlus,
  StyledButton,
  StyledCreateTitle,
  StyledCreate,
  StyledCreateInput,
  StyledForm,
};
