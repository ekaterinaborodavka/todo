import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";
import { MainHeader } from "./MainHeader";

export default {
  title: "MainHeader",
  component: MainHeader,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <MainHeader title={text("Title", "Title")} path={"/"} />;
};
