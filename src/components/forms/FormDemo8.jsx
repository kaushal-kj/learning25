import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo8 = () => {
  // handling data when submitted
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("error", errors);
  // use useState for displaying data on page
  const [output, setOutput] = useState();
  const [isSubmitted, setisSubmitted] = useState(false);
  // callback function for handle submit
  const submitHandler = (data) => {
    console.log(data);
    setOutput(data);
    setisSubmitted(true);
  };
  // creating a validation schema to give specific validations
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
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email format",
      },
    },
    ageValidator: {
      required: {
        value: true,
        message: "age is required*",
      },
      min: {
        value: 18,
        message: "min age is 18",
      },
      max: {
        value: 60,
        message: "max age is 60",
      },
    },
    contactValidator: {
      required: {
        value: true,
        message: "contact required",
      },
      pattern: {
        //regex
        value: /[6-9]{1}[0-9]{9}/,
        message: "not valid number",
      },
    },
    usernameValidator: {
      required: {
        value: true,
        message: "username required*",
      },
    },
    passwordValidator: {
      required: {
        value: true,
        message: "password required*",
      },
      pattern: {
        value:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:
          "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character",
      },
    },
    refcodeValidator: {
      required: {
        value: true,
        message: "ref code required*",
      },
      validate: (value) => {
        return value == "royal" || "must be royal";
      },
    },
  };
  // html contents under return tag
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>Student Form</h1>
      {/* form creation */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <div style={{ margin: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            {...register("name", validationSchema.nameValidator)}
          ></input>
          <span style={{ color: "red" }}>
            <p>{errors.name?.message}</p>
          </span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", validationSchema.emailValidator)}
          ></input>
          <span style={{ color: "red" }}>
            <p>{errors.email?.message}</p>
          </span>
        </div>
        <div style={{ margin: "10px" }}>
          <label> Age:</label>
          <input
            type="number"
            name="age"
            {...register("age", validationSchema.ageValidator)}
          ></input>
          <span style={{ color: "red" }}>
            <p>{errors.age?.message}</p>
          </span>
        </div>
        <div style={{ margin: "10px" }}>
          <label> contact:</label>
          <input
            type="number"
            name="contact"
            {...register("contact", validationSchema.contactValidator)}
          ></input>
          <span style={{ color: "red" }}>
            <p>{errors.contact?.message}</p>
          </span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Date of Birth:</label>
          <input type="date" name="dob" {...register("dob")}></input>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            {...register("dob")}
          ></input>{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            {...register("dob")}
          ></input>{" "}
          Female
        </div>
        <div style={{ margin: "10px" }}>
          <label>Interests:</label>
          <input
            type="checkbox"
            name="interests"
            value="tech"
            {...register("interests")}
          ></input>
          Technology
          <input
            type="checkbox"
            name="interests"
            value="sports"
            {...register("interests")}
          ></input>
          Sports
          <input
            type="checkbox"
            name="interests"
            value="music"
            {...register("interests")}
          ></input>
          Music
          <input
            type="checkbox"
            name="interests"
            value="travel"
            {...register("interests")}
          ></input>
          Travel
          <input
            type="checkbox"
            name="interests"
            value="fitness"
            {...register("interests")}
          ></input>
          Fitness
        </div>
        <div style={{ margin: "10px" }}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            {...register("username", validationSchema.usernameValidator)}
          ></input>
          <span style={{ color: "red" }}>
            <p>{errors.username?.message}</p>
          </span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>password:</label>
          <input
            type="password"
            name="password"
            {...register("password", validationSchema.passwordValidator)}
          ></input>
          <span style={{ color: "red" }}>
            <p>{errors.password?.message}</p>
          </span>
        </div>
        {/* <div style={{ margin: "10px" }}>
          <label>Ref Code:</label>
          <input
            type="text"
            name="ref"
            {...register("ref", validationSchema.refcodeValidator)}
          ></input>
          <span style={{ color: "red" }}>{errors.ref?.message}</span>
        </div> */}
        <div>
          <label>Color:</label>
          <input type="color" {...register("color")}></input>
        </div>
        <button type="submit">Save Profile</button>

        {/* for displaying content on page */}
        {isSubmitted == true ? (
          <div style={{ color: output.color }}>
            <h1> {output?.name}</h1>
            <h2>{output?.email}</h2>
            <h2>{output?.age}</h2>
            <h2>{output?.contact}</h2>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
