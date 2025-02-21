import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Loader } from "../Loader";

export const ApiDemo1 = () => {
  const [message, setMessage] = useState("");
  const [users, setusers] = useState([]);
  const [isloading, setisloading] = useState(false);

  const getUserData = async () => {
    setisloading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    // console.log(res);
    // console.log(res.data);
    // console.log(res.data.message);
    setMessage(res.data.message);
    setusers(res.data.data);
    setisloading(false);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const deleteUser = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log(res);
    if (res.status == 204) {
      // alert("user deleted..")
      toast.error("🦄 Deleted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      getUserData();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <h1>Api demo 1</h1>
      {isloading == true ? <Loader /> : ""}
      {/* <button
        onClick={() => {
          getUserData();
        }}
      >
        GET
      </button> */}
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
              <th>Action</th>
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
                  <td>
                    <button
                      onClick={() => {
                        deleteUser(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
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
