const axios = require('axios');

export const createDojo = (dojo) => axios.post('http://localhost:8080/api/dojos', {
    dojo // Acá va el body del request
});