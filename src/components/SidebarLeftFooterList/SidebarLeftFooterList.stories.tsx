import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { SidebarLeftFooterList, SidebarFooterListProps } from "./SidebarLeftFooterList";
import { sidebarFooter } from "~src/utils/utils";

export default {
  title: "SidebarLeftFooterList",
  component: SidebarLeftFooterList,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SidebarFooterListProps> = () => {
  return <SidebarLeftFooterList open={boolean("Open", false)} content={sidebarFooter}></SidebarLeftFooterList>;
};
