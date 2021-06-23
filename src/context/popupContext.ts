import { createContext } from "react";

interface PopupContextProps {
  onClose: () => void;
  togglePopup: () => void;
}

export const PopupContext = createContext({} as PopupContextProps);
