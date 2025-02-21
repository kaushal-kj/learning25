import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors", errors);
  const submitHandler = (data) => {
    console.log(data);
  };
  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "name required*",
      },
    },
    emailValidator: {
      required: {
        value: true,
        message: "email required*",
      },
      minLength: {
        value: 5,
        message: "min length is 5",
      },
      maxLength: {
        value: 15,
        message: "max length is 15",
      },
    },
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Goa Trip</h1>
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
