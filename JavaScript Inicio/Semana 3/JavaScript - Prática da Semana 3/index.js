// Implementar comando de repetição (de 1 até 20)

let soma_pares = 0;
let soma_impares = 0;

for (let i = 1; i <= 20; i++) {
  let quadrado = i * i;
  console.log(quadrado);
  // Implementar os comandos de decisão para verificar números quadrados pares ou ímpares
  if (quadrado % 2 == 0) {
    soma_pares = soma_pares + quadrado;
  } else {
    soma_impares = soma_impares + quadrado;
  }
}
console.log("Soma dos quadrados pares: ", soma_pares);
console.log("Soma dos quadrados Impares: ", soma_impares);
