import React from "react";

export const ArrayDemo2 = () => {
  var students = [
    {
      name: "John",
      age: 25,
      marks: 84,
    },
    {
      name: "Jane",
      age: 22,
      marks: 92,
    },
    {
      name: "Mike",
      age: 28,
      marks: 78,
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Array of Students</h1>
      {students.map((student) => {
        return (
          <div>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Marks: {student.marks}</p>
          </div>
        );
      })}
    </div>
  );
};
