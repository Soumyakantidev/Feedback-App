import React from "react";
import spinner from "../assets/Spinner@1x-1.0s-200px-200px.gif";

export const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="...Loading"
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};
