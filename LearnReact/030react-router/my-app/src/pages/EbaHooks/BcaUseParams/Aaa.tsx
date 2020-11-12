import React from "react";
import { useParams } from "react-router-dom";

export const Aaa = () => {
  const params = useParams();
  return (
    <div>
      <div>this is Aaa.</div>
      <div>{JSON.stringify(params)}</div>
    </div>
  );
};
