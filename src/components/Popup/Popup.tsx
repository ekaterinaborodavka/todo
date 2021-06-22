import React, { useCallback } from "react";

import { PopupContent } from "~components";
import { useStateFlags } from "~src/hooks/useStateFlags";

interface PopupProps {
  button: React.ElementType;
}

export const Popup: React.FC<PopupProps> = ({ button: Button, children }) => {
  const { flag: isPopupOpened, toggleFlag: togglePopup, setFlagFalse: setHidePopup } = useStateFlags(false);

  const onClose = useCallback(() => {
    if (isPopupOpened) {
      setHidePopup();
    }
  }, [isPopupOpened, setHidePopup]);

  return (
    <>
      {isPopupOpened ? <PopupContent onClose={onClose}>{children}</PopupContent> : null}
      <Button onClick={togglePopup} />
    </>
  );
};
