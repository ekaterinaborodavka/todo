import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { HeaderTitle } from "./HeaderTitle";

export default {
  title: "HeaderTitle",
  component: HeaderTitle,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <HeaderTitle />;
};
