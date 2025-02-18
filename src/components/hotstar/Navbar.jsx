import React from "react";
// import "../assets/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo1">
                Sample-Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo2">
                Goa-Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo3">
                Prayagraj-Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo4">
                Food-Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo5">
                Booking-Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo6">
                Product-Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo7">
                Membership-Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo8">
                Student-Form
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo1">
                Api Demo 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/searchmovie">
                Search movie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
