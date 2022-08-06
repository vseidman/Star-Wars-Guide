import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			name: [],
			gender: [],
			homeworld: [],
			films: [],
			urlstarWars: "https://www.swapi.tech/api/",
			endPoint: ["name", "gender", "homeworld", "films"],
		},
		actions: {
			getCharacter: async () => {

				let store = getStore();

				try {
					store.endPoint.forEach(async (element) => {

						let response = await fetch(`${store.urlstarWars}/${element}`)

						let data = await response.json()

						data.results.forEach(async (item) => {

							let responseTwo = await fetch(`${store.urlstarWars}/${element}/${item.uid}`)

							let results = await responseTwo.json()
							setStore({
								...store,
								[element]: [...store[element], results.result]
							})
						});
					})

				} catch (error) {
					console.log(error);
				}

			},
		}
	};
};

export default getState;