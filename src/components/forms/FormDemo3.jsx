import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Prayagraj Trip</h1>
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
        <div>
          <label>gender</label>
          <input
            type="text"
            placeholder="enter gender"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label>Preference:</label>
          <br />
          20km <input type="checkbox" {...register("check")}></input>
          swimming <input type="checkbox" {...register("check")}></input>
          return <input type="checkbox" {...register("check")}></input>
        </div>
        <div>
          <label>City:</label>
          <select name="Enter City" {...register("city")}>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="goa">Goa</option>
          </select>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
