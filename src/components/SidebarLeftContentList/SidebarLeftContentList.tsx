import React, { useState } from "react";
import { useContext } from "react";

import { SidebarLeftContentItem } from "~components";
import { SidebarLeftContentItemProps, SidebarLeftListProps } from "~src/types";
import { Context } from "~src/context/context";

import { StyledList } from "./SidebarLeftContentList.styled";

export const SidebarLeftContentList: React.FC<SidebarLeftListProps> = ({ contentSidebar, isDrag = false }) => {
  const [currentList, setCurrentList] = useState<SidebarLeftContentItemProps | undefined>();
  const { setUserList } = useContext(Context);

  const onDragStart = (e: React.DragEvent<HTMLLIElement>, list?: SidebarLeftContentItemProps) => {
    setCurrentList(list);
  };

  const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLLIElement>, list?: SidebarLeftContentItemProps) => {
    e.preventDefault();

    setUserList((state) =>
      state.map((el) => {
        if (el.id === list?.id) {
          return { ...el, ...currentList };
        }

        if (el.id === currentList?.id) {
          return { ...el, ...list };
        }

        return el;
      })
    );
  };

  return (
    <StyledList>
      {contentSidebar.map((content) => (
        <SidebarLeftContentItem
          key={content.id}
          {...content}
          isDrag={isDrag}
          dragStart={isDrag ? (e) => onDragStart(e, content) : undefined}
          dragOver={isDrag ? onDragOver : undefined}
          dragDrop={isDrag ? (e) => onDrop(e, content) : undefined}
        />
      ))}
    </StyledList>
  );
};
