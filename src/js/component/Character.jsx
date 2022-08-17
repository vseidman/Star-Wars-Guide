import React, { useContext } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwarslogo.png"
import { Context } from "../store/appContext.js";
const Character = ({ character }) => {

  const { store, actions } = useContext(Context);
  const { name, uid, created } = character;
  const isLiked = store.liked.indexOf(uid) > -1;
  const handleLike = isLiked ? actions.removeLike : actions.setLike;
  const likeColor = isLiked ? "red" : ""



  return (
    <>
      <div className="">
        <div className="card my-3">
          <img src={starWarsLogo} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-footer">
            <Link to={`/people/${uid}`} className="btn btn-secondary">
              More Info
            </Link>
            <button type="button"
              className={`btn btn-secondary like ${likeColor}`}
              onClick={() => { actions.addFavoritos(created)}}>
              <i className="fas fa-heart"></i></button>
            </div>
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