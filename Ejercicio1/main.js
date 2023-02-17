const a = [1,2] 
const b = [[1,2],[2,4]] 
const c = [[1,2],[2,4],[2,4]] 
const d = [[[3,4],[6,5]]] 
const e = [[[1, 2,3]], [[5, 6, 7],[5, 4, 3]], [[3, 5, 6], [4, 8, 3], [2, 3]]] 
const f = [[[1, 2, 3], [2, 3, 4]], [[5, 6, 7], [5, 4, 3]], [[3,5, 6], [4, 8, 3]]]

const MyMatrix = require('./mi-matrix.js');
let myMatrix = new MyMatrix(f);
const compute = myMatrix.straight()

console.log(compute);
