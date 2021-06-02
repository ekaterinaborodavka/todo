import { createContext } from "react";

interface SidebarContextProps {
  isSidebarOpened: boolean;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpened: false,
});
