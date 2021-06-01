import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";

import { SidebarLeftFooterItem, SidebarLeftFooterItemProps } from "./SidebarLeftFooterItem";
import { Icons } from "~src/utils/utils";

export default {
  title: "SidebarLeftFooterItem",
  component: SidebarLeftFooterItem,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SidebarLeftFooterItemProps> = () => {
  return (
    <SidebarLeftFooterItem
      icon={optionsKnob("Icon", Icons, Icons.envelope, { display: "select" })}
    ></SidebarLeftFooterItem>
  );
};
