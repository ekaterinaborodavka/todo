import { createContext } from "react";

interface SidebarLeftContextProps {
  isSidebarOpened: boolean;
}

export const SidebarLeftContext = createContext<SidebarLeftContextProps>({
  isSidebarOpened: false,
});
