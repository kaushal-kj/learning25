import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const ApiDemo3 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = async (data) => {
    const res = await axios.post("https://node5.onrender.com/user/user", data);
    console.log(res.data);
    if (res.status == 201) {
      alert("data saved");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API Demo 3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>EMAIL</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>STATUS</label>
          <input type="text" {...register("isActive")}></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
