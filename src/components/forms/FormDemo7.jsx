import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
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
            <h1>Membership Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{ margin: "10px" }}>
                    <label >Name:</label>
                    <input type="text" name="name" {...register("name", validationSchema.nameValidator)}></input>
                    <span style={{ color: "red" }}>{errors.name?.message}</span>
                </div>
                <div style={{ margin: "10px" }}>
                    <label >Email:</label>
                    <input type="email" name="email" {...register("email", validationSchema.emailValidator)}></input>
                    <span style={{ color: "red" }}>{errors.email?.message}</span>
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
