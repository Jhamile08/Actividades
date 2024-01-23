import alias, {coderName, coderAge, showInformation,verifyHire, Coder} from './index.js';
import { coderMedellin } from './coderMedellin.js';
// Invocar constantes  y variable
console.log(coderName, coderAge);
// Invocar funciones
console.log(showInformation(),verifyHire());


const coder = new Coder('sara',44)
console.log(coder.showInfo());
console.log(coderMedellin());
let coderMedallo  = new coderMedellin(coderName, coderAge,nivel)
console.log(coderMedallo.showInfo());

alias()