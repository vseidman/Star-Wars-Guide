import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwarslogo.png"
const Character = ({ character }) => {

    const {name, uid} = character; 

    return (
        <>
      <div className="col-12 col-md-4">
        <div className="card my-3">
        <img src={starWarsLogo} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/people/${uid}`} className="btn btn-secondary">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </>
    );
};

Character.propTypes = {
    character: PropTypes.object,
};

export default Character;