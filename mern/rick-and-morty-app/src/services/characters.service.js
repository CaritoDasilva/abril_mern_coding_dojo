const axios = require('axios');

export const getAllCharacters = async () => {
    const characters = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(characters);
    return characters.data;    
};

export const getSingleCharacter = async (id) => {
    const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return character.data;
}
