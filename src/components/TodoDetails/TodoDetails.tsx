import React, { useContext } from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { TodoDetailsFooter } from "~components";

const StyledContainer = styled.div<{ isShow: boolean }>`
  width: 30%;
  background-color: ${COLORS.bgDetailsMenu};
  height: 100%;
  display: ${(props) => (props.isShow ? "flex" : "none")};
  transition: all 0.5s linear;
  position: relative;
`;

const StyledFooterWrapper = styled.div`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  overflow: auto;
`;

export const TodoDetails: React.FC = () => {
  const { currentTodo } = useContext(Context);

  const isShowDetails = Boolean(Object.keys(currentTodo).length);

  return (
    <StyledContainer isShow={isShowDetails}>
      <StyledContentWrapper></StyledContentWrapper>
      <StyledFooterWrapper>
        <TodoDetailsFooter />
      </StyledFooterWrapper>
    </StyledContainer>
  );
};
