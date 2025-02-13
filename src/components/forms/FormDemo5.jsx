import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo5 = () => {
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
    emailValidator: {
      required: {
        value: true,
        message: "email required*"
      },
      minLength: {
        value: 5,
        message: "min length is 5"
      },
      maxLength: {
        value: 15,
        message: "max length is 15"
      }
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div style={{ margin: "10px" }}>
          <label>Name:</label>
          <input type="text" name="name" {...register("name", validationSchema.nameValidator)}></input>
          <span style={{ color: "red" }}>{errors.name?.message}</span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Email:</label>
          <input type="email" name="email" {...register("email", validationSchema.emailValidator)}></input>
          <span style={{ color: "red" }}>{errors.email?.message}</span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Select Date:</label>
          <input type="date" name="date" {...register("date")}></input>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Select Time:</label>
          <input type="time" name="time" {...register("time")}></input>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Number of People:</label>
          <input type="number" name="people" {...register("people")}></input>
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};
