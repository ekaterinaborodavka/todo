import { createContext } from "react";
import { ContentRightSidebar } from "~src/types";

interface SidebarRightContextProps {
  closeSidebar: () => void;
  openSidebar: () => void;
  currentButton: string;
  setCurrentButton: React.Dispatch<React.SetStateAction<string>>;
  setContentSidebar: React.Dispatch<React.SetStateAction<ContentRightSidebar>>;
}

export const SidebarRightContext = createContext<SidebarRightContextProps>({} as SidebarRightContextProps);
