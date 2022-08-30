import React, {useContext} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwarslogo.png"
import { Context } from "../store/appContext.js";

const Planets = ({ planetData }) => {

  const { store, actions } = useContext(Context);
  const { name, created } = planetData;
  const isLiked = store.liked.indexOf(planetData) > -1;
  const handleLiked = isLiked ? actions.removeLike : actions.setLike;
  const likedColor = isLiked ? "red" : ""

  return (
    <>
      <div className="">
        <div className="card my-3">
          <img src={starWarsLogo} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-footer">
            <Link to={`/planets/${created}`} className="btn btn-secondary">
              More Info
            </Link>
            <button type="button"
              className={`btn btn-secondary like ${likedColor}`}
              onClick={() => { actions.addFavoritos(created)}}>
              <i className="fas fa-heart"></i></button>
            </div>
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