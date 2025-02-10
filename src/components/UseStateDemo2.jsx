import React, { useState } from "react";

export const UseStateDemo2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <h1>USE STATE DEMO 2</h1>
      <h1>{isLoading == true ? "loading" : ""}</h1>
      <button
        onClick={() => {
          stopLoading();
        }}
      >
        Toggle Loading
      </button>
    </div>
  );
};
