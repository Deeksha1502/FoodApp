import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorDisplay = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!</h1>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};
