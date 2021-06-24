import React, { useCallback, useContext } from "react";

import { PopupContent } from "~components";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { Context } from "../../context/context";
import { PopupContext } from "../../context/popupContext";
import { onCloseOpenedPopups } from "../../utils/todoUtils";

interface PopupProps {
  button?: React.ElementType;
  isOpen?: boolean;
}

export const Popup: React.FC<PopupProps> = ({ isOpen, button: Button, children }) => {
  const { flag: isPopupOpened, toggleFlag: togglePopup, setFlagFalse: setHidePopup } = useStateFlags(isOpen || false);
  const { todos, setTodos } = useContext(Context);
  const onClose = useCallback(() => {
    if (isPopupOpened) {
      setHidePopup();
      const currentTodos = onCloseOpenedPopups(todos);
      setTodos(currentTodos);
    }
  }, [isPopupOpened, setHidePopup, setTodos, todos]);

  return (
    <>
      <PopupContext.Provider value={{ onClose, togglePopup }}>
        {isPopupOpened ? <PopupContent onClose={onClose}>{children}</PopupContent> : null}
        {Button ? <Button onClick={togglePopup} /> : null}
      </PopupContext.Provider>
    </>
  );
};
