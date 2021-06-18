import React, { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { ParametersListItem } from "./ParametersListItem";
import { ParametersItem } from "~src/types";

export default {
  title: "ParametersListItem",
  component: ParametersListItem,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<ParametersItem> = () => {
  const [params, setParams] = useState([] as ParametersItem[]);
  const item = {
    title: text("Title", "Title"),
    check: boolean("Check", true),
  } as ParametersItem;

  return <ParametersListItem params={params} setParams={setParams} item={item} />;
};
