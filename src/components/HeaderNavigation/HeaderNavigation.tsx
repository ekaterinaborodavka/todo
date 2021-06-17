import React, { useState } from "react";

import { HeaderButtons, SidebarRight } from "~components";
import { SidebarRightContext } from "~src/context/sidebarRightContext";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { SidebarRightContent } from "~src/types";

export const HeaderNavigation: React.FC = () => {
  const { flag: isSidebarOpened, setFlagFalse: closeSidebar, setFlagTrue: openSidebar } = useStateFlags(false);
  const [currentButton, setCurrentButton] = useState("");
  const [contentSidebar, setContentSidebar] = useState<SidebarRightContent>({} as SidebarRightContent);

  return (
    <SidebarRightContext.Provider
      value={{
        closeSidebar,
        openSidebar,
        currentButton,
        setCurrentButton,
        setContentSidebar,
      }}
    >
      <SidebarRight content={contentSidebar} isOpen={isSidebarOpened} onClose={closeSidebar} />
      <HeaderButtons />
    </SidebarRightContext.Provider>
  );
};
