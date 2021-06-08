import { createContext } from "react";
interface MainTitleContextProps {
  isShowOptions: boolean;
  setIsShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  isShowSortList: boolean;
  setIsShowSortList: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainTitleContext = createContext({} as MainTitleContextProps);
