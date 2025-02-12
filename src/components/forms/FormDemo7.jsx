import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Membership Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{ margin: "10px" }}>
                    <label >Name:</label>
                    <input type="text" name="name" {...register("name")}></input>
                </div>
                <div style={{ margin: "10px" }}>
                    <label >Email:</label>
                    <input type="email" name="email" {...register("email")}></input>
                </div>
                <div style={{ margin: "10px" }}>
                    <label >Membership Type:</label>
                    <select name="membership" {...register("membership")}>
                        <option value="basic">Basic</option>
                        <option value="premium">Premium</option>
                        <option value="vip">VIP</option>
                    </select>
                </div>
                <div style={{ margin: "10px" }}>
                    <input type="checkbox" name="term" {...register("term")}></input>
                    i agree to the terms and conditions
                </div>
                <button type='submit'>Join now</button>
            </form>
        </div>
    )
}
