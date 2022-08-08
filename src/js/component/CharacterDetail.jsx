import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";

//react-router-dom
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
    //store 
    const { store, actions } = useContext(Context);

    let params = useParams();;


    const { nature, nature_id } = params;
    const [person, setPerson] = useState({});



    useEffect(() => {
        actions.getDetails({ nature: nature, uid: nature_id })
    }, [nature_id]);

    return (
        <>
            {nature == "people" ?
                (<div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-7">
                            <div className="card my-3">
                                <img
                                    src={person.image}
                                    className="card-img-top"
                                    alt={person.name}
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{store.details.properties?.name}</h3>
                                    <ul>
                                        <li><p className="card-text">Gender: {store.details.properties?.gender}</p></li>
                                        <li><p className="card-text">Hair Color: {store.details.properties?.hair_color}</p></li>
                                        <li><p className="card-text">Eye Color: {store.details.properties?.eye_color}</p></li>
                                        <li><p className="card-text">Skin Color: {store.details.properties?.skin_color}</p></li>
                                    </ul>
                                    <h6>Click Star Wars logo to go back</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) :
                (<div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-7">
                            <div className="card my-3">
                                <img
                                    src={person.image}
                                    className="card-img-top"
                                    alt={person.name}
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{store.details.properties?.name}</h3>
                                    <ul>
                                        <li><p className="card-text">Climate: {store.details.properties?.climate}</p></li>
                                        <li><p className="card-text">Terrain: {store.details.properties?.terrain}</p></li>
                                        <li><p className="card-text">Gravity: {store.details.properties?.gravity}</p></li>
                                        <li><p className="card-text">Diameter: {store.details.properties?.diameter}</p></li>
                                    </ul>
                                    <h6>Click Star Wars logo to go back</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default CharacterDetail;
