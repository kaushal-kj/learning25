import React, { useState } from "react";

export const InputDemo1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const eventHandler = (event) => {
    setname(event.target.value);
  };
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1>INPUT DEMO 1</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => {
            eventHandler(event);
          }}
        />
        <p>{name}</p>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(event) => setemail(event.target.value)}
        />
        <p>{email}</p>
      </div>
    </div>
  );
};
