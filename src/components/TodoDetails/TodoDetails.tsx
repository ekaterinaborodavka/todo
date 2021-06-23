import React, { useContext } from "react";

import { Context } from "~src/context/context";
import { TodoDetailsFooter } from "~components";

import { StyledContainer, StyledContentWrapper, StyledFooterWrapper } from "./TodoDetails.styled";

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
