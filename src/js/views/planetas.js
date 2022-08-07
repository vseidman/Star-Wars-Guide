import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

//components
import Planets from "../component/Planets.jsx";

export const Planetas = () => {
	const {store, actions} = useContext(Context);

	return (
	<>
      <div className="container">
        <div className="row">
          {store.planets && store.planets.map((planet,index) => {
            return (
              <Planets
                key={index}
                planetData={planet}
              />
            );
          })}
        </div>
      </div>
	</>
	);
};