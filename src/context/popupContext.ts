import { createContext } from "react";

interface PopupContextProps {
  onClose: () => void;
}

export const PopupContext = createContext({} as PopupContextProps);
