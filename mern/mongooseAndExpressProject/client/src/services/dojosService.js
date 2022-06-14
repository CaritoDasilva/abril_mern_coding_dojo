const axios = require('axios');

export const createDojo = (dojo) => axios.post('http://localhost:8080/api/dojos', {
    dojo // Acá va el body del request
});

export const getDojos = () => axios.get('http://localhost:8080/api/dojos');

export const addInstructors = (instructors) => axios.put('http://localhost:8080/api/dojos/instructors/629ea50cb05eb39824a0bdee', { instructors } )

export const getDojo = (id) => axios.get(`http://localhost:8080/api/dojos/${id}`);

export const updateDojo = (id, dojo) => axios.put(`http://localhost:8080/api/dojos/update/${id}`, {
    dojo // Acá va el body del request con el dojo actualizado
});

export const deleteDojo = (id) => axios.delete(`http://localhost:8080/api/dojos/delete/${id}`);