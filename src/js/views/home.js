import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

//components
import Character from "../component/Character.jsx"

export const Home = () => {
	const {store, actions} = useContext(Context);

	return (
	<>
      <div className="container">
        <div className="row">
          {store.people && store.people.map((character) => {
            return (
              <Character
                key={`character-${character._id}`}
                character={character}
              />
            );
          })}
        </div>
      </div>
	</>
	);
};
