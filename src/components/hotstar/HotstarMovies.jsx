import React from "react";
import { Link } from "react-router-dom";

export const HotstarMovies = () => {
  return (
    <div>
      <h1>Hotstar Movies page</h1>
      <ul>
        <li>
          <Link to="/play/Pushpa">Pushpa</Link>
        </li>
        <li>
          <Link to="/play/DDLJ">DDLJ</Link>
        </li>
        <li>
          <Link to="/play/1018">Avengers</Link>
        </li>
      </ul>
    </div>
  );
};
