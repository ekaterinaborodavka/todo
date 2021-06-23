import React, { useCallback } from "react";

import { PopupContent } from "~components";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { PopupContext } from "~src/context/popupContext";
import { PopupProps } from "~src/types";

export const Popup: React.FC<PopupProps> = ({ button: Button, children }) => {
  const { flag: isPopupOpened, toggleFlag: togglePopup, setFlagFalse: setHidePopup } = useStateFlags(false);

  const onClose = useCallback(() => {
    if (isPopupOpened) {
      setHidePopup();
    }
  }, [isPopupOpened, setHidePopup]);

  return (
    <>
      <PopupContext.Provider value={{ togglePopup }}>
        {isPopupOpened ? <PopupContent onClose={onClose}>{children}</PopupContent> : null}
        <Button onClick={togglePopup} />
      </PopupContext.Provider>
    </>
  );
};
