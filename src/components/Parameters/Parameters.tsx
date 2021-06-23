import React, { useContext } from "react";

import { ParametersList } from "~components";
import { Context } from "~src/context/context";
import { ParameterTitles } from "~src/types";

export const Parameters: React.FC = () => {
  const {
    totalParams,
    myDayParams,
    smartListParams,
    applicationsParams,
    setTotalParams,
    setMyDayParams,
    setSmartListParams,
    setApplicationsParams,
  } = useContext(Context);

  return (
    <>
      <ParametersList setParams={setTotalParams} parameters={totalParams} title={ParameterTitles.total} />
      <ParametersList setParams={setMyDayParams} parameters={myDayParams} title={ParameterTitles.myDay} />
      <ParametersList setParams={setSmartListParams} parameters={smartListParams} title={ParameterTitles.smartList} />
      <ParametersList
        setParams={setApplicationsParams}
        parameters={applicationsParams}
        title={ParameterTitles.applications}
      />
    </>
  );
};
