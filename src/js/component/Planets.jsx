import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwarslogo.png"

const Planets = ({ planetData }) => {
  const { name, uid } = planetData;

  return (
    <>
      <div className="col-12 col-md-4">
        <div className="card my-3">
          <img src={starWarsLogo} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/planets/${uid}`} className="btn btn-secondary">
              More Info
            </Link>
            <button type="button" className="btn btn-secondary like"><i className="fas fa-heart"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

Planets.propTypes = {
  planetData: PropTypes.object,
};

export default Planets;