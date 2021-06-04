import { createContext } from "react";
import { ThemeNames } from "~src/types";
interface MainTitleContextProps {
  isShowOptions: boolean;
  setIsShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  isShowSortList: boolean;
  setIsShowSortList: React.Dispatch<React.SetStateAction<boolean>>;
  setThemeVariant: React.Dispatch<React.SetStateAction<ThemeNames>>;
  themeVariant: ThemeNames;
}

export const MainTitleContext = createContext({} as MainTitleContextProps);
