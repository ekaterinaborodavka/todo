import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

import { SidebarLeft } from "./SidebarLeft";

export default {
  title: "SidebarLeft",
  component: SidebarLeft,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <SidebarLeft></SidebarLeft>;
};
