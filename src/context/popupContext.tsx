import { createContext } from "react";

interface PopupContextProps {
  togglePopup: () => void;
}

export const PopupContext = createContext({} as PopupContextProps);
