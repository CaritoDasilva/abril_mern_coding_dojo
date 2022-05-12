// var magicalUnicorns;
// console.log(magicalUnicorns);
// let magicalUnicorns = "awesome";
// console.log(magicalUnicorns);

const myArr = [1, 2, 3, 4]

const myArrowFunction = () => true;

const myArrowFunctionWithoutReturn = () => {
    return true;
};

console.log(myArrowFunction());
console.log(myArrowFunctionWithoutReturn());

const myNewArr = myArr.map((element, idx) => element + 1);

const myNewArr2 = myArr.map((element, idx) => {
    
    return element + 1;
});


console.log(myNewArr2); 

var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);