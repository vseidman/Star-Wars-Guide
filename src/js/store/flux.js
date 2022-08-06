import { element } from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			name: [],
			gender: [],
			homeworld: [],
			films: [],
			planets: [],
			urlstarWars: "https://www.swapi.tech/api",
			endPoint: ["people", "planets"]
		},
		actions: {
			getCharacters: async () => {

				let store = getStore();

				try {
					let response = await fetch(`${store.urlstarWars}/people`)
					let data = await response.json();

					setStore({ ...store, people: data.results });
				} catch (error) {
					console.log(error);
				}

			},
			getPlanets: async () => {

				let store = getStore();

				try {
					let response = await fetch(`${store.urlstarWars}/planets`)
					let data = await response.json();

					setStore({ ...store, planets: data.results });
				} catch (error) {
					console.log(error);
				}

			}
		},
	};
};

export default getState;