import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";

//react-router-dom
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
    //store 
    const { store, actions } = useContext(Context);

    let params = useParams();;


    const { nature_id, nature } = params;
    const [person, setPerson] = useState({});
    



    useEffect(() => {
        let current = actions.getDetails(nature_id, nature)
        setPerson(current)
    }, [nature_id, nature]);

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
                                    <h3 className="card-title">{person.name}</h3>
                                    <ul>
                                        <li><p className="card-text">Gender: {person.gender}</p></li>
                                        <li><p className="card-text">Hair Color: {person.hair_color}</p></li>
                                        <li><p className="card-text">Eye Color: {person.eye_color}</p></li>
                                        <li><p className="card-text">Skin Color: {person.skin_color}</p></li>
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
                                    <h3 className="card-title">{person.name}</h3>
                                    <ul>
                                        <li><p className="card-text">Climate: {person.climate}</p></li>
                                        <li><p className="card-text">Terrain: {person.terrain}</p></li>
                                        <li><p className="card-text">Gravity: {person.gravity}</p></li>
                                        <li><p className="card-text">Diameter: {person.diameter}</p></li>
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
