import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/logo2.png"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo" src={starWars} /></Link>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle fav" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Likes
          </button>
          <ul className="dropdown-menu dropdown-menu-dark fav" aria-labelledby="dropdownMenuButton2">
            <li><a className="dropdown-item active" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
