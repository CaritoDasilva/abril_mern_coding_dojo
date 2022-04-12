// Condicionales

function storeLicuor(age) {
    // money = true
    if(age < 18 && money) {
        return 'Lo siento no te podemos vender porque no cumples con la edad mínima';
    } else {
        return 'Bienvenido, díganos en qué podemos ayudarle';
    }
}

// OPERADORES TERNARIOS

// !money => negación de la variable
// money = false

function storeLicuorTernary(age, money) {
    return ( age < 18 && !money ) ? 'Lo siento no te podemos vender porque no cumples con la edad mínima' :
        'Bienvenido, díganos en qué podemos ayudarle';
};

function entryPark(age, isAParent) {
    ( age < 15 || isAParent ) && 'Bienvenido a nuestro Parque de diversiones';


}

// null y undefined

// Loops
// for

function sumUntilTen() {
    let counter = 0
    for (let i = 0; i <= 10; i++) {
        counter = i;
    }
    return counter;
}

// while y doWhile

function sumUntileTwenty() {
    let counter = 0;
    let n = 0;
    while (n < 20) {
        n ++;
        counter = n;
    }
    return counter;
}

function sumUntilFifty() {
    let i = 0;
    let counter = 0;
    do {
        i ++;
        counter = i;
    } while (i < 50);
    return counter;
}

console.log(sumUntilFifty());

