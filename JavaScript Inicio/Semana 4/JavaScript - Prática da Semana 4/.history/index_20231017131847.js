const prompt = require("prompt-sync")();

alturas = [];

// Implementar a entrada de dados
for (let i = 0; i < 3; i++) {
  alturas.push(parseFloat(prompt("Digite a altura: " + (i + 1) + ": ")));
}

// Implementar o processamento de dados
for (let i = 0; i < alturas.length; i++) {
  let contador = 0;
  // Fazer for dentro de for
  for (let j = 0; j < alturas.length; j++) {
    if (alturas[i] > alturas[j]) {
      contador++;
    }
  }
  // Implementar a saída de dados
  console.log("aluno " + (i + 1) + " maior que " + contador + " aluno (s)");
}
