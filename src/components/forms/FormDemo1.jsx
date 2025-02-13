import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
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
    },
    ageValidator: {
      required: {
        value: true,
        message: "age is required*"
      },
      min: {
        value: 18,
        message: "min age is 18"
      },
      max: {
        value: 60,
        message: "max age is 60"
      }
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sample Form</h1>
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
          <label>Age</label>
          <input
            type="number"
            placeholder="enter age"
            {...register("age", validationSchema.ageValidator)}
          ></input>
          <span style={{ color: "red" }}>{errors.age?.message}</span>
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
