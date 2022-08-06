import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/starwarslogo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Imagen de starWars</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/planets">Planets</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
