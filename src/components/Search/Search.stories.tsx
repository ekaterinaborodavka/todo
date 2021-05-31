import React, { useCallback } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { Search, SearchProps } from "./Search";

export default {
  title: "Search",
  component: Search,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<SearchProps> = () => {
  const filterTodos = useCallback((value) => {
    console.log(value);
  }, []);
  return <Search filterTodos={filterTodos}></Search>;
};
