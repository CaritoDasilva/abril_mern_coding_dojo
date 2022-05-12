//Desestructuración
// Extraemos propiedades de un objeto
const student = {
    firstName: 'Juanin',
    lastName: 'Soto',
    age: 23,
    favoriteLanguages: ['Python', ['Javascript', 'MERN'], 'Golang']
}
// console.log("🚀 ~ file: destructuring.js ~ line 9 ~ firstName", firstName)
const { favoriteLanguages: [,secondFavorite, thirdFavorite ] } = student;
const [first, second] = secondFavorite;
// console.log("🚀 ~ file: destructuring.js ~ line 12 ~ favoriteLanguages", favoriteLanguages)
// console.log("🚀 ~ file: destructuring.js ~ line 11 ~ firstName", firstName)

// const [,, thirdFavorite ] = favoriteLanguages;
// console.log("🚀 ~ file: destructuring.js ~ line 16 ~ secondFavorite", second)

// KISS
// KEEP IT STUPID SIMPLE

// Residuo (Rest)/Propagación (Spread)
// SPREAD

const student2 = {...student, firstName: 'Carolina', hobbies: ['leer', 'andar en bici', 'hacer trekking']};
// console.log("🚀 ~ file: destructuring.js ~ line 24 ~ student2", student2);
const { hobbies } = student2;
const student3 = {
    firstName1: 'Alejandro',
    lastName1: 'Hernandez'
};

const mixStudents = {...student, ...student3};
// console.log("🚀 ~ file: destructuring.js ~ line 33 ~ mixStudents", mixStudents);

// REST

const { age, favoriteLanguages, ...rest } = student;
// console.log("🚀 ~ file: destructuring.js ~ line 30 ~ rest", rest);

const newArr = [...favoriteLanguages, ...hobbies]; 
// console.log("🚀 ~ file: destructuring.js ~ line 33 ~ newArr", newArr)

