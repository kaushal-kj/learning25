import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Product Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{ margin: "10px" }}>
                    <label >Name:</label>
                    <input type="text" name='name' min="1" {...register("name")}></input>
                </div>
                <div style={{ margin: "10px" }}>
                    <label >Email:</label>
                    <input type="email" name='email' {...register("email")}></input>
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
