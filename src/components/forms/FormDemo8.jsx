import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("error", errors);
    const [output, setOutput] = useState();
    const [isSubmitted, setisSubmitted] = useState(false);

    const submitHandler = (data) => {
        console.log(data);
        setOutput(data);
        setisSubmitted(true);
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
                value: 60,
                message: "max length is 15"
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
        },
        contactValidator: {
            required: {
                value: true,
                message: "contact required"
            },
            pattern: {
                //regex
                value: /[6-9]{1}[0-9]{9}/,
                message: "not valid number"
            }
        },
        usernameValidator: {
            required: {
                value: true,
                message: "username required*"
            }
        },
        passwordValidator: {
            required: {
                value: true,
                message: "password required*"
            },
            pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message: "must contain 8 letters,1 capital,1 special character,1 number"
            }
        },
        refcodeValidator: {
            required: {
                value: true,
                message: "ref code required*"
            },
            validate: (value) => {
                return value == "royal" || "must be royal"
            }
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Student Form</h1>
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
                    <label > Age:</label>
                    <input type="number" name='age' {...register("age", validationSchema.ageValidator)}></input>
                    <span style={{ color: "red" }}>{errors.age?.message}</span>
                </div>
                <div style={{ margin: "10px" }}>
                    <label > contact:</label>
                    <input type="number" name='contact' {...register("contact", validationSchema.contactValidator)}></input>
                    <span style={{ color: "red" }}>{errors.contact?.message}</span>
                </div>
                <div style={{ margin: "10px" }}>
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" {...register("dob")}></input>
                </div>
                <div style={{ margin: "10px" }}>
                    <label>Gender:</label>
                    <input type="radio" name="gender" value="male" {...register("dob")}></input> Male
                    <input type="radio" name="gender" value="female" {...register("dob")}></input> Female
                </div>
                <div style={{ margin: "10px" }}>
                    <label>Interests:</label>
                    <input type="checkbox" name="interests" value="tech" {...register("interests")}></input>Technology
                    <input type="checkbox" name="interests" value="sports" {...register("interests")}></input>Sports
                    <input type="checkbox" name="interests" value="music" {...register("interests")}></input>Music
                    <input type="checkbox" name="interests" value="travel" {...register("interests")}></input>Travel
                    <input type="checkbox" name="interests" value="fitness" {...register("interests")}></input>Fitness
                </div>
                <div style={{ margin: "10px" }}>
                    <label>Username:</label>
                    <input type="text" name="username" {...register("username", validationSchema.usernameValidator)}></input>
                    <span style={{ color: "red" }}>{errors.username?.message}</span>
                </div>
                <div style={{ margin: "10px" }}>
                    <label>password:</label>
                    <input type="password" name="password" {...register("password", validationSchema.passwordValidator)}></input>
                    <span style={{ color: "red" }}>{errors.password?.message}</span>
                </div>
                <div style={{ margin: "10px" }}>
                    <label>Ref Code:</label>
                    <input type="text" name="ref" {...register("ref", validationSchema.refcodeValidator)}></input>
                    <span style={{ color: "red" }}>{errors.ref?.message}</span>
                </div>
                <div>
                    <label>Color:</label>
                    <input type="color" {...register("color")}></input>
                </div>
                <button type='submit'>Save Profile</button>
                {
                    isSubmitted == true ? <div style={{ color: output.color }}>
                        <h1> {output?.name}</h1>
                        <h2>{output?.email}</h2>
                        <h2>{output?.age}</h2>
                        <h2>{output?.contact}</h2>
                    </div> : ""
                }
            </form>
        </div>
    )
}
