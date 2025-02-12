import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {
    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Student Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{ margin: "10px" }}>
                    <label>Name:</label>
                    <input type="text" name="name" {...register("name")}></input>
                </div>
                <div style={{ margin: "10px" }}>
                    <label>Email:</label>
                    <input type="email" name="email" {...register("email")}></input>
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
                    <input type="text" name="username" {...register("username")}></input>
                </div>
                <div style={{ margin: "10px" }}>
                    <label>password:</label>
                    <input type="password" name="password" {...register("password")}></input>
                </div>
                <button type='submit'>Save Profile</button>
            </form>
        </div>
    )
}
