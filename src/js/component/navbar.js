import React, {useContext} from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/logo2.png"
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const {store, actions} = useContext(Context) 
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo" src={starWars} /></Link>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle fav" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos {store.favoritos.length}
          </button>
          <ul className="dropdown-menu dropdown-menu-dark fav" aria-labelledby="dropdownMenuButton2">
            {store.favoritos.length > 0 ? 
            (store.favoritos.map((item) =>{
              return (
                <li key={item.created}>{item.name}</li>
              )
            })) 
            : "Empty"}
          </ul>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
