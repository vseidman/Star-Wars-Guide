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
			endPoint: ["people", "planets"],
			details: {},
			liked: []
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
				try{
					let response = await fetch (`${store.urlstarWars}/${dataDetails.nature}/${dataDetails.uid}`)
					let data = await response.json();
					if(response.ok){
						setStore({...store, details:data.result})
					}
				}catch (error) {
					console.log(error)
				}
				console.log(`${store.urlstarWars}/${dataDetails.nature}/${dataDetails.uid}`)
			},
			setLike: (uid) => {
				
				let store = getStore(); 
				setStore({...store, liked:[...store.liked, uid]})
			},
			removeLike: (uid) => {
				let store = getStore();
				let likedCopy = store.liked.slice() //Slice para copiar el array
				let index = likedCopy.indexOf(uid)
				if (index > -1)likedCopy.splice(index, 1);
				setStore({...store, liked:likedCopy});
			},
		},
	};
};

export default getState;