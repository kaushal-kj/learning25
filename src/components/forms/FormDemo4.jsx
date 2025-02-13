import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log("errors", errors);
  const submitHandler = (data) => {
    console.log(data);
  }
  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "name required*"
      }
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Food Form</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div style={{ margin: "10px" }}>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter name"
            {...register("name", validationSchema.nameValidator)}
          ></input>
          <span style={{ color: "red" }}>{errors.name?.message}</span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Toppings</label>
          <br />
          Cheeze
          <input type="radio" name="topping" {...register("topping")}></input>
          Chilliflakes
          <input type="radio" name="topping" {...register("topping")}></input>
          Oragano
          <input type="radio" name="topping" {...register("topping")}></input>
        </div>
        <div style={{ margin: "10px" }}>
          <label>gender</label>
          <input
            type="text"
            placeholder="enter gender"
            {...register("gender")}
          ></input>
        </div>
        <div style={{ margin: "10px" }}>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
