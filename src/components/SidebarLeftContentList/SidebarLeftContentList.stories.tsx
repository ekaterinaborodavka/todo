import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

import { SidebarLeftContentList, SidebarLeftListProps } from "./SidebarLeftContentList";
import { sidebarContent } from "~src/utils/utils";

export default {
  title: "SidebarLeftContentList",
  component: SidebarLeftContentList,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SidebarLeftListProps> = () => {
  return <SidebarLeftContentList content={sidebarContent}></SidebarLeftContentList>;
};
