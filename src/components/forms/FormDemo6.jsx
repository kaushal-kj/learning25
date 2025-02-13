import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
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
            <h1>Product Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{ margin: "10px" }}>
                    <label >Name:</label>
                    <input type="text" name='name' min="1" {...register("name", validationSchema.nameValidator)}></input>
                    <span style={{ color: "red" }}>{errors.name?.message}</span>
                </div>
                <div style={{ margin: "10px" }}>
                    <label >Email:</label>
                    <input type="email" name='email' {...register("email", validationSchema.emailValidator)}></input>
                    <span style={{ color: "red" }}>{errors.email?.message}</span>
                </div>
                <div style={{ margin: "10px" }}>
                    <label >Shipping Address:</label>
                    <textarea name='address' {...register("address")}></textarea>
                </div>
                <div style={{ margin: "10px" }}>
                    <label >Select Product:</label>
                    <select name="product" {...register("product")}>
                        <option value="phone">SmartPhone</option>
                        <option value="laptop">Laptop</option>
                        <option value="headphone">HeadPhone</option>
                    </select>
                </div>
                <div style={{ margin: "10px" }}>
                    <label > Quantity:</label>
                    <input type="number" name='quantity' {...register("quantity")}></input>
                </div>
                <button type='submit'>Order now</button>
            </form>

        </div>
    )
}
