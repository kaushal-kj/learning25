import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [message, setMessage] = useState("");
  const [users, setusers] = useState([]);

  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    console.log(res.data);
    console.log(res.data.message);
    setMessage(res.data.message);
    setusers(res.data.data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Api demo 1</h1>
      <button
        onClick={() => {
          getUserData();
        }}
      >
        GET
      </button>
      {/* {message}
      {users?.map((user) => {
        return <li>{user.name}</li>;
      })} */}
      {users.length > 0 ? (
        <table class="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>ISACTIVE</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.isActive == true ? "yes" : "no"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
};
