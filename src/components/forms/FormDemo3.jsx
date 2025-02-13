import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
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
      <h1>Prayagraj Trip</h1>
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
          Bus:{" "}
          <input
            type="radio"
            name="transport"
            {...register("transport")}
          ></input>
          Train:{" "}
          <input
            type="radio"
            name="transport"
            {...register("transport")}
          ></input>
          Flight:{" "}
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
          <label>Preference:</label>
          <br />
          20km <input type="checkbox" {...register("check")}></input>
          swimming <input type="checkbox" {...register("check")}></input>
          return <input type="checkbox" {...register("check")}></input>
        </div>
        <div style={{ margin: "10px" }}>
          <label>City:</label>
          <select name="Enter City" {...register("city")}>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="goa">Goa</option>
          </select>
        </div>
        <div style={{ margin: "10px" }}>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
