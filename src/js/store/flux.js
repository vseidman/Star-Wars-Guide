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
			getDetails: async (dataDetails) => {

				let store = getStore();
				console.log(dataDetails)
				try {
					let response = await fetch(`${store.urlstarWars}/${dataDetails.created}/${dataDetails.created}`)
					let data = await response.json();
					if (response.ok) {
						setStore({ ...store, details: data.result })
					}
				} catch (error) {
					console.log(error)
				}
				console.log(`${store.urlstarWars}/${dataDetails.created}/${dataDetails.created}`)
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