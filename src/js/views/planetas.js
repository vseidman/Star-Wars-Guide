import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

//components
import Planets from "../component/Planets.jsx";

export const Planetas = () => {
	const {store, actions} = useContext(Context);
  console.log(store.planets)
	return (
	<>
      <div className="container">
        <div className="row">
          {store.planets && store.planets.map((planet,index) => {
            // return (
            //   <Planets
            //     key={index}
            //     planetData={planet}
            //   />
            // );
          return (<h2>{planet.name}</h2>)
          })}
        </div>
      </div>
	</>
	);
};