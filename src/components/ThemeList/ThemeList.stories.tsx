import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

import { ThemeList } from "./ThemeList";
import { themeButtons } from "~src/utils/utils";
import { ThemeListProps } from "~src/types";

export default {
  title: "ThemeList",
  component: ThemeList,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<ThemeListProps> = () => {
  return <ThemeList themes={themeButtons} />;
};
