import axios from "axios";
import React from "react";

export const ApiDemo2 = () => {
  var userObj = {
    name: "kaushal",
    age: 22,
    email: "kaushal@gmail.com",
    isActive: true,
  };
  const postdata = async () => {
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log(res.data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Api Demo 2</h1>
      <button
        onClick={() => {
          postdata();
        }}
      >
        post
      </button>
    </div>
  );
};
