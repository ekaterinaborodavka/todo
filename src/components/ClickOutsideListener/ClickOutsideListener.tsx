import React, { useCallback } from "react";
import ClickAwayListener from "react-click-away-listener";

interface ClickOutsideListenerProps {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClickOutsideListener: React.FC<ClickOutsideListenerProps> = ({ isShow, setIsShow, children }) => {
  const onClose = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    }
  }, [setIsShow, isShow]);

  return (
    <ClickAwayListener onClickAway={onClose}>
      <div>{children}</div>
    </ClickAwayListener>
  );
};
