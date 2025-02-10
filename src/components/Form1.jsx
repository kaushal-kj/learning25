import React, { useState } from "react";

export const Form1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form 1</h1>
      <div style={{ margin: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="enter name"
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        {name}
      </div>
      <div style={{ margin: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="enter email"
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        {email}
      </div>
      <div style={{ margin: "10px" }}>
        <label>Phone No.:</label>
        <input
          type="tel"
          placeholder="enter phone"
          onChange={(event) => {
            setphone(event.target.value);
          }}
        />
        {phone}
      </div>
      <div style={{ margin: "10px" }}>
        <label>Address:</label>
        <input
          type="text"
          placeholder="enter address"
          onChange={(event) => {
            setaddress(event.target.value);
          }}
        />
        {address}
      </div>
      <div style={{ margin: "10px" }}>
        <label>Gender</label>
        <input
          type="text"
          placeholder="enter gender"
          onChange={(event) => {
            setgender(event.target.value);
          }}
        />
        {gender}
      </div>
    </div>
  );
};
