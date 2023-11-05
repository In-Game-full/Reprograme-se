const prompt = require("prompt-sync")();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade >= 65 || tempo >= 30 || (idade >= 60 && idade < 65 && tempo >= 25)) {
  console.log("Você pode se aposentar!");
  if (tempo > 20) {
    salario = salario * 0.8;
    if (salario > 1212.0 && salario < 7078.22) {
      console.log("Voce receberá 80% DO SEU SALARIO ", salario);
    } else if (salario < 1212.0) {
      console.log("Voce receberá 1212.00");
    } else if (salario > 7078.22) {
      console.log("Voce receberá 7078.22");
    }
  } else {
    salario = salario * 0.6;
    if (salario > 1212.0 && salario < 7078.22) {
      console.log("Voce receberá 60% DO SEU SALARIO ", salario);
    } else if (salario < 1212.0) {
      console.log("Voce receberá 1212.00");
    } else if (salario > 7078.22) {
      console.log("Voce receberá 7078.22");
    }
  }
} else {
  console.log("você não pode se aposentar!");
}

// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)

// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
