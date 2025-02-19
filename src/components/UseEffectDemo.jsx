import React, { useEffect } from "react";

export const UseEffectDemo = () => {
  useEffect(() => {
    console.log("use effect called......");
  }, []);
  return (
    <div>
      <h1>Use Effect Demo </h1>
    </div>
  );
};
