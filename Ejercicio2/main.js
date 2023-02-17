const a = "Hello World";
const b = "2 + 10 / 2 - 20";
const c = "(2 + 10) / 2 - 20";
const d = "(2 +10)     / (2 - 0";

const MyArray = require('./mi-array');
let myArray = new MyArray(a); // se debe cambiar la variable para evaluar los casos o en su defecto ingresar el string
const compute = myArray.compute() //cambiar metodo segun el test

console.log(compute);