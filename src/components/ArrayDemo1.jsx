import React from "react";

export const ArrayDemo1 = () => {
  var users = ["ram", "shyam", "kaushal", "devam", "dadhichi"];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Array Demo 1</h1>
      {/* <h2>{users[0]}</h2>
      <h2>{users[1]}</h2>
      <h2>{users[2]}</h2>
      <h2>{users[3]}</h2>
      <h2>{users[4]}</h2> */}

      {users.map((user) => {
        return <li>{user}</li>;
      })}
    </div>
  );
};
