import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sample Form</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div style={{margin:"10px"}}>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter name"
            {...register("name")}
          ></input>
        </div>
        <div style={{margin:"10px"}}>
          <label>Age</label>
          <input
            type="number"
            placeholder="enter age"
            {...register("age")}
          ></input>
        </div>
        <div style={{margin:"10px"}}>
          <label>gender</label>
          <input
            type="text"
            placeholder="enter gender"
            {...register("gender")}
          ></input>
        </div>
        <div style={{margin:"10px"}}>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
