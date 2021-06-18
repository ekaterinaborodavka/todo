import React, { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { CheckButton } from "./CheckButton";
import { ParametersItem } from "~src/types";

export default {
  title: "CheckButton",
  component: CheckButton,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  const [params, setParams] = useState([] as ParametersItem[]);
  return <CheckButton params={params} setParams={setParams} status={boolean("Check", false)} id={1} />;
};
