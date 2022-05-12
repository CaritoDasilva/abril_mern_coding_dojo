// Arrow functions
// *Tienen un retorno implícito

const sum = (a, b) => a + b;

console.log(sum(4, 2));

// map => recorre un array y retorna uno nuevo;

const students = [
    {
        name: 'Carolina'
    }, 
    {
        name: 'Guille',
    },
    {
        name: 'Mateo',
    },
    {
        name: 'Matias'
    }
]

// const studentsAndIds = students.map((student, idx) => {
//     console.log("🚀 ~ file: arrowFunctions.js ~ line 28 ~ studentsAndIds ~ student", student, idx)
//     return {
//         ...student,
//         id: idx
//     }
// })

const studentsAndIds = students.map((student, idx) => (
    {
        ...student,
        id: idx
    }
))

console.log(studentsAndIds);
