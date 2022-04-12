//Variables
// var => variable de tipo global
var saludo = 'Hola cómo andan?';
console.log("🚀 ~ file: index.js ~ line 4 ~ saludo", saludo)


// const/constante y let => puede cambiar su valor

const date = '06/04/2022';

let favoriteFruit = 'apple';

favoriteFruit = 'orange';

// Tipos de datos
// String o cadenas de textos
const string = 'Hola mundo';
// Number
const number = 9;

let numberA = 9;
numberA = '10';
// console.log("🚀 ~ file: index.js ~ line 22 ~ numberA", numberA);

// Boolean => true / false
const isLoaded = true;

// Arrays
const favoritesFruits = ['apple', 'lemon', 'orange'];

// Objetos
const student = {
    name: 'Carolina Portillo',
    stack: 'Mern',
    age: 22,
    hobbies: ['salta la cuerda', 'ir al cine', 'leer un libro']
}

let student2 = {
    name: 'Guille',
    stack: 'Mern',
    age: 22,
    hobbies: ['salta la cuerda', 'ir al cine', 'leer un libro']
}

// console.log(Object.values(student));

const propiedad = 'name';

student2.name = 'Mateo';

// console.log(student2.name)

const students = [student, student2];
// console.log("🚀 ~ file: index.js ~ line 47 ~ students", students);

// console.log(students[1])

// Operadores 
// Suma +
// Resta -
// División /
// Multiplicación *

// Funciones
// scope
function hacerQueque(sugar, flavor, water) {
    const queque = sugar + flavor + water;
    // console.log(queque);
    return queque;
}



const sugar = 1;

// console.log(hacerQueque(sugar, 2, 1));

function returnInverseName(string) {
    let nuevoArreglo = ''
    for (let i = string.length -1; i >= 0; i--) {                
        // nuevoArreglo.push(string[i]);       
        nuevoArreglo +=  string[i];
    }        
    return nuevoArreglo;     
}

console.log(returnInverseName('mateo'));

// Hacer una función que reciba una palabra y determina si es un palíndromo o no

function isPalindrom(word) {

    // código 

    return
}

isPalindrom('oso') //true
isPalindrom('casa') //false

