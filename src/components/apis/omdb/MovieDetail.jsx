import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../../assets/style.css";
import star from "../../../assets/star.png";
import blustar from "../../../assets/bluestar.png";
import flame from "../../../assets/flame.png";

export const MovieDetail = () => {
  const id = useParams().id;

  const [movie, setmovie] = useState(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=afcad37a&i=${id}`
        );
        console.log(res.data);
        setmovie(res.data);
      } catch (error) {
        console.error("error fetching movie", error);
      }
    };
    getMovieDetail();
    return {};
  });

  return (
    <>
      {/* <button
        className="btn btn-light"
        onClick={() => {
          getMovieDetail();
        }}
      >
        Get
      </button> */}
      <div className="body">
        <div className="header">
          <div className="movie-title">
            <p className="movie-name">{movie.Title}</p>
            <p className="three-detail">
              {movie.Year} &bull; {movie.Rated} &bull; {movie.Runtime}
            </p>
          </div>
          <div className="rating">
            <div className="imdb-rating">
              <p className="imdb-title">IMDb RATING</p>
              <p className="imdb-rates">
                <span className="star-png">
                  <img src={star} />
                </span>
                <span style={{ fontSize: "20px" }}>{movie.imdbRating}/</span>10
              </p>
            </div>
            <div className="your-rating">
              <p className="your-rate-title">YOUR RATING</p>
              <p className="your-rate-symbol">
                <span className="star-png">
                  <img src={blustar} />
                </span>
                RATE
              </p>
            </div>
            <div className="imdb-votes">
              <p className="imdb-vote-title">IMDb VOTES</p>
              <p className="imdb-vote-no">
                <span className="star-png">
                  <img src={flame} />
                </span>
                {movie.imdbVotes}
              </p>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={movie.Poster}></img>
        </div>
        <div className="detail-movie">
          <p className="plot">{movie.Plot}</p>
          <p className="bottom-line"></p>
          <p className="director">
            Director: <span className="detail-blue">{movie.Director}</span>
          </p>
          <p className="bottom-line"></p>
          <p className="writer">
            Writer: <span className="detail-blue">{movie.Writer}</span>
          </p>
          <p className="bottom-line"></p>
          <p className="actor">
            Actors: <span className="detail-blue">{movie.Actors}</span>
          </p>
          <p className="bottom-line"></p>
        </div>
      </div>
    </>
  );
};
