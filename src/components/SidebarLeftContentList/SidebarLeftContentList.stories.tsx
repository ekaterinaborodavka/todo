import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

import { sidebarContent } from "~src/utils/utils";
import { SidebarLeftContentList } from "~components";

import { SidebarLeftListProps } from "./SidebarLeftContentList";

export default {
  title: "SidebarLeftContentList",
  component: SidebarLeftContentList,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SidebarLeftListProps> = () => {
  return <SidebarLeftContentList isDrag={false} contentSidebar={sidebarContent}></SidebarLeftContentList>;
};
