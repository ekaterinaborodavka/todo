import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

import { SortList, SortListProps } from "./SortList";
import { sortVariant } from "~src/utils/utils";

export default {
  title: "SortList",
  component: SortList,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SortListProps> = () => {
  return <SortList sortVariant={sortVariant}></SortList>;
};
