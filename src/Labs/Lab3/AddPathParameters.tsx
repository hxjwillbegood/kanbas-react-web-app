import React from "react";
import { useParams } from "react-router-dom";
export default function AddPathParameters() {
  const { a, b } = useParams();
  return (
    <div id="wd-add"> <h2>Add Path Parameters</h2>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
