import { useState, useCallback } from "react";

interface useStateFlagsTypes {
  flag: boolean;
  setFlagTrue: () => void;
  setFlagFalse: () => void;
  toggleFlag: () => void;
}

export const useStateFlags = (initialFlag: boolean): useStateFlagsTypes => {
  const [flag, setFlag] = useState(initialFlag);

  const setFlagTrue = useCallback(() => {
    setFlag(true);
  }, [setFlag]);

  const setFlagFalse = useCallback(() => {
    setFlag(false);
  }, [setFlag]);

  const toggleFlag = useCallback(() => {
    setFlag(!flag);
  }, [setFlag, flag]);

  return {
    flag,
    setFlagTrue,
    setFlagFalse,
    toggleFlag,
  };
};
