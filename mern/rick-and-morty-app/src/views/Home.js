import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import { getAllCharacters } from "../services/characters.service";
import { Link } from 'react-router-dom';


const Home = () => {

    const [characters, setCharacters] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const getCharactersFromService = async () => {
        try {
            const charactersArr = await getAllCharacters();
            console.log("🚀 ~ file: Home.js ~ line 11 ~ getCharactersFromService ~ charactersArr", charactersArr)
            setCharacters(charactersArr.results);
        } catch(err) {
            console.log("🚀 ~ file: Home.js ~ line 16 ~ getCharactersFromService ~ err", err.response)
            setErrorMsg(err.response.data.error)
        }
    }

    useEffect(() => {
        getCharactersFromService();

    }, []);


    return(
        <div>
            <h1>Rick and Morty</h1>
            {
                characters?.map(character => (
                    <Link to={`/character/${character.id}`}>
                        <Character 
                            name={character.name} 
                            image={character.image} 
                            key={character.id} />
                    </Link>
                ))
            }
            <p>{errorMsg}</p>
        </div>
    )
}

export default Home;