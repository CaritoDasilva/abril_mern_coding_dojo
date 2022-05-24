import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Character from "../components/Character";
import { getSingleCharacter } from "../services/characters.service";

const CharacterDetail = () => {
    const [character, setCharacter] = useState();
    const [errorMsg, setErrorMsg] = useState('');

    const { id } = useParams();

    console.log(useParams())

    const getCharacterFromService = async () => {
        try {
            const characterFromService = await getSingleCharacter(id);
            setCharacter(characterFromService);
        } catch(err) {
            setErrorMsg(err.response.data.error);
        }
    }

    useEffect(() => {
        id && getCharacterFromService();
    }, [id])
    

    return(
        <div>
            <Link to="/home">Volver al Home</Link>
            <h1>Soy el {id}</h1>
            {
                character && (
                    <Character name={character.name} image={character.image}/>
                )
            }
            <p>{errorMsg}</p>
        </div>
    )

}

export default CharacterDetail;