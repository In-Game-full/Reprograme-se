const prompt = require("prompt-sync")();

console.log("A seguir Digite 3 numeros, ao fim você terá a soma e média deles.\n");
// Leia os três números
let num_1 = parseFloat(prompt("Digite o primeiro número: "));
let num_2 = parseFloat(prompt("Digite o Segundo numero: "));
let num_3 = parseFloat(prompt("Digite o terceiro numero: "));

// Calcule a soma e a média
let soma = num_1 + num_2 + num_3;
let media = soma / 3;

// Mostre na tela o valor da soma e média
console.log("\n a soma é: ", soma, "e a média é: ", media);
