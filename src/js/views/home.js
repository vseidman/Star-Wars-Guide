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
				<div className="card-padre">
					<div className="card-sw">
						<div className="container">
							<div className="row"><h1 className="title-color">Characters</h1>
								{store.people && store.people.map((character, index) => {
									return (
										<Character
											key={index}
											character={character}
										/>
									);
								})}
							</div>
						</div>
						<div className="container">
							<div className="row"><h1 className="title-color">Planets</h1>
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
				</div>
			</div>
		</>
	);
};
