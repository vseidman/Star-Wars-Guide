import React from "react";
import PropTypes from "prop-types"

const Character = ({ character }) => {

    const {name, gender, homeworld, films} = character.properties; 

    return (
        <>
      <div className="col-12 col-md-4">
        <div className="card my-3">
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{gender}</h5>
            <Link to={`/character/${_id}`} className="btn btn-primary">
              ver más
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