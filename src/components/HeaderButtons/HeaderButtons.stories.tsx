import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { HeaderButtons } from "./HeaderButtons";

export default {
  title: "HeaderButtons",
  component: HeaderButtons,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <HeaderButtons />;
};
