import React from "react";

export const ArrayDemo3 = () => {
  var employees = [
    {
      id: 1,
      name: "kaushal",
      age: 21,
      salary: 30000,
      gender: "male",
    },
    {
      id: 2,
      name: "ravi",
      age: 22,
      salary: 25000,
      gender: "male",
    },
    {
      id: 3,
      name: "priya",
      age: 23,
      salary: 28000,
      gender: "female",
    },
    {
      id: 4,
      name: "ramesh",
      age: 24,
      salary: 32000,
      gender: "male",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Array Demo 4</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
