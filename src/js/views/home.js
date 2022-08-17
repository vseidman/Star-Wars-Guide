import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

//components
import Character from "../component/Character.jsx"
import Planets from "../component/Planets.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h1 className="title-color">Characters</h1>
				<div className="card-container">
					{store.people && store.people.map((character, index) => {
						return (
							<Character
								key={index}
								character={character}
							/>
						);
					})}
				</div>

				<div className="container">
				<h1 className="title-color">Planets</h1>
					<div className="card-container">
						{store.planets && store.planets.map((planet, index) => {
							return (
								<Planets
									key={index}
									planetData={planet}
								/>
							);
						})}
					</div>
				</div>
			</div>

		</>
	);
};
