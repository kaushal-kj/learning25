import React from "react";

export const Player = () => {
  var players = [
    {
      id: 1,
      name: "Sachin Tendulkar",
      score: 164,
      gender: "male",
      playing: false,
      age: 51,
    },
    {
      id: 2,
      name: "Virat Kohli",
      score: 141,
      gender: "male",
      playing: true,
      age: 36,
    },
    {
      id: 3,
      name: "Virender Sehwag",
      score: 72,
      gender: "male",
      playing: false,
      age: 46,
    },
    {
      id: 4,
      name: "Shikhar Dhawan",
      score: 55,
      gender: "male",
      playing: true,
      age: 39,
    },
    {
      id: 5,
      name: "Mithali Raj",
      score: 71,
      gender: "female",
      playing: true,
      age: 42,
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Player Table</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>TOTAL 50's</th>
            <th>GENDER</th>
            <th>PLAYING</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr>
                <td>{player.id}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: player.playing
                        ? "transparent"
                        : "yellow",
                      color: player.playing ? "white" : "black",
                    }}
                  >
                    {player.name}
                  </span>
                  <span style={{ color: "red" }}>
                    {player.age > 35 && player.playing
                      ? " *please retire.."
                      : " "}
                  </span>
                </td>
                <td style={{ color: player.score >= 100 ? "green" : "white" }}>
                  {player.score}
                </td>
                <td>{player.gender}</td>
                <td>{player.playing ? "Yes" : "No"}</td>
                <td>{player.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
