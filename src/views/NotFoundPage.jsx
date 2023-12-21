import React from "react";
import { useLocation } from "react-router-dom";

export const NotFoundPage = () => {
  const location = useLocation();

  return (
    <>
      <h1>404 Not Found</h1>
      <h6>{location.pathname}</h6>
    </>
  );
};
