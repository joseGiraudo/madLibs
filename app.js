
let userInputs = [];

userInputs[0] = prompt('sustantivo');
userInputs[1] = prompt('adjetivo');
userInputs[2] = prompt('conector');
userInputs[3] = prompt('verbo');
userInputs[4] = prompt('sustantivo');
userInputs[5] = prompt('adjetivo');
userInputs[6] = prompt('adjetivo');
userInputs[7] = prompt('sustantivo');

console.log(userInputs);

let originalStory = `El castillo estaba rodeado de un frondoso ${userInputs[0]} y un lago muy ${userInputs[1]}. Por lo que sólo se puede acceder al castillo a ${userInputs[2]} de un puente.
 Los guardias vigilan durante todo el día para ${userInputs[3]} al rey que observa todo lo que pasa desde la ${userInputs[4]} más ${userInputs[5]} del castillo. 
 En el bosque hay animales muy ${userInputs[6]} como osos o ${userInputs[7]}`

console.log(originalStory)
document.write(originalStory);
