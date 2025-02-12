import React from "react";
// import "../assets/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                Sample-Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                Goa-Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                Prayagraj-Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
                Food-Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo5">
                Booking-Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo6">
                Product-Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo7">
                Membership-Form
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo8">
                Student-Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
