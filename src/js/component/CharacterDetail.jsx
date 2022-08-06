import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";

//react-router-dom
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
    //store 
    const { store, actions } = useContext(Context);

    let params = useParams();;


    const { character_id } = params;
    const [person, setPerson] = useState({});

    const getDetail = async () => {
        let result = store.character.find((item) => item.id == character_id);
        setPerson(result)
    };

    useEffect(() => {
        if (store.character.length > 0) {
            getDetail()
        }
    }, [store.character]);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <div className="card my-3">
                            <img
                                src={person.image}
                                className="card-img-top"
                                alt={person.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">{person.gender}</p>
                                <p className="card-text">{person.homeworld}</p>
                                <p className="card-text">{person.films}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetail;
