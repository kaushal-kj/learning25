import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo5 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center"}}>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div style={{margin:"10px"}}>
          <label>Name:</label>
          <input type="text" name="name" {...register("name")}></input>
        </div>
        <div style={{margin:"10px"}}>
          <label>Email:</label>
          <input type="email" name="email" {...register("email")}></input>
        </div>
        <div style={{margin:"10px"}}>
          <label>Select Date:</label>
          <input type="date" name="date" {...register("date")}></input>
        </div>
        <div style={{margin:"10px"}}>
          <label>Select Time:</label>
          <input type="time" name="time" {...register("time")}></input>
        </div>
        <div style={{margin:"10px"}}>
          <label>Number of People:</label>
          <input type="number" name="people" {...register("people")}></input>
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};
