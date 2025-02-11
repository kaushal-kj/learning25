import React, { useState } from "react";

export const Form2 = () => {
  const [name, setname] = useState("");
  const [productname, setproductname] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Information Form</h1>
      <div style={{ margin: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="enter name"
          onChange={(event) => {
            setname(event.target.value);
          }}
        ></input>
        {name}
      </div>
      <div style={{ margin: "10px" }}>
        <label>Product Name:</label>
        <input
          type="text"
          placeholder="enter product name"
          onChange={(event) => {
            setproductname(event.target.value);
          }}
        ></input>
        {productname}
      </div>
      <div style={{ margin: "10px" }}>
        <label>Phone No.:</label>
        <input
          type="tel"
          placeholder="enter phone"
          onChange={(event) => {
            setphone(event.target.value);
          }}
        ></input>
        {phone}
      </div>
      <div style={{ margin: "10px" }}>
        <label>City:</label>
        <input
          type="text"
          placeholder="enter city"
          onChange={(event) => {
            setcity(event.target.value);
          }}
        ></input>
        {city}
      </div>
      <div style={{ margin: "10px" }}>
        <label>State</label>
        <input
          type="text"
          placeholder="enter state"
          onChange={(event) => {
            setstate(event.target.value);
          }}
        ></input>
        {state}
      </div>
    </div>
  );
};
