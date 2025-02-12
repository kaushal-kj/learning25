import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Goa Trip</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter name"
            {...register("name")}
          ></input>
        </div>
        <div>
          <label>Transport</label>
          <br />
          Bus
          <input
            type="radio"
            name="transport"
            {...register("transport")}
          ></input>
          Train
          <input
            type="radio"
            name="transport"
            {...register("transport")}
          ></input>
          Flight
          <input
            type="radio"
            name="transport"
            {...register("transport")}
          ></input>
        </div>
        <div>
          <label>gender</label>
          <input
            type="text"
            placeholder="enter gender"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
