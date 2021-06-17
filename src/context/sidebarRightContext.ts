import { createContext } from "react";
import { SidebarRightContent } from "~src/types";

interface SidebarRightContextProps {
  closeSidebar: () => void;
  openSidebar: () => void;
  currentButton: string;
  setCurrentButton: React.Dispatch<React.SetStateAction<string>>;
  setContentSidebar: React.Dispatch<React.SetStateAction<SidebarRightContent>>;
}

export const SidebarRightContext = createContext<SidebarRightContextProps>({} as SidebarRightContextProps);
