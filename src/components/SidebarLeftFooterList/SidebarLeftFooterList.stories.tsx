import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

import { SidebarLeftFooterList, SidebarFooterListProps } from "./SidebarLeftFooterList";
import { sidebarFooter } from "~src/utils/utils";

export default {
  title: "SidebarLeftFooterList",
  component: SidebarLeftFooterList,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SidebarFooterListProps> = () => {
  return <SidebarLeftFooterList content={sidebarFooter}></SidebarLeftFooterList>;
};
