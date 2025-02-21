import React from "react";
import "../assets/loader.css";

export const Loader = () => {
  return (
    <>
      {/* From Uiverse.io by JaydipPrajapati1910 */}
      <div className="spinner">
        <div className="outer">
          <div className="inner tl" />
          <div className="inner tr" />
          <div className="inner br" />
          <div className="inner bl" />
        </div>
      </div>
    </>
  );
};
