import { element } from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			planets: [],
			urlstarWars: "https://swapi.dev/api",
			endPoint: ["people", "planets"],
			details: {},
			liked: [],
			favoritos: []
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

			},
			getDetails: (dataDetails, nature) => {

				let store = getStore();
				try {
					if(nature === "planets"){
						let currentPlanet = store.planets.find((item) => item.created == dataDetails)
						return currentPlanet 
					}else if(nature === "people"){
						let current = store.people.find((item) => item.created == dataDetails)
						return current
					}else(
						console.log("No lo encontre")
					)
					console.log(current)
				} catch (error) {
					console.log(error)
				}
				
			},
			setLike: (created) => {

				let store = getStore();
				setStore({ ...store, liked: [...store.liked, created] })
			},
			removeLike: (created) => {
				let store = getStore();
				let likedCopy = store.liked.slice() //Slice para copiar el array
				let index = likedCopy.indexOf(created)
				if (index > -1) likedCopy.splice(index, 1);
				setStore({ ...store, liked: likedCopy });
			},
			addFavoritos: (favoritos) => {
				let store = getStore();
				let exist = store.favoritos.find((item) => item.created == favoritos)
				if (!exist) {
					for (let endPoint of store.endPoint) {
						for (let item of store[endPoint]) {
							if (item.created == favoritos) {
								setStore({
									...store,
									favoritos: [...store.favoritos, item]
								})
							}
						}
					}
				} else {
					let newFavorite = store.favoritos.filter((item) => favoritos != item.created)
					setStore({
						...store,
						favoritos: newFavorite
					})
				}

			}
		},
	};
};

export default getState;