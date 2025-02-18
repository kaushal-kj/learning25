import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchMovie = () => {
  const [movieData, setmovieData] = useState([]);
  const [moviename, setmoviename] = useState("");
  const searchMovie = async () => {
    const res = await axios.get(
      "http://www.omdbapi.com/?apikey=afcad37a&s=" + moviename
    );
    console.log(res.data);
    setmovieData(res.data.Search);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Search Movie</h1>
      <input
        type="text"
        onChange={(event) => {
          setmoviename(event.target.value);
        }}
      ></input>
      <button
        className="btn btn-dark"
        onClick={() => {
          searchMovie();
        }}
      >
        Search
      </button>
      <div className="container mt-5">
        <div className="row">
          {movieData?.map((movie) => {
            return (
              <div className="col-md-2">
                <div className="card">
                  <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img src={movie.Poster} className="card-img-top" />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
