const prompt = require('prompt-sync')();
var array_oculos = [];

do {
  console.log("Sistema de Cadastro de Óculos");
  console.log("1 - Inserir Óculos");
  console.log("2 - Excluir Óculos");
  console.log("3 - Listar Óculos");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Óculos...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let cor = prompt("Digite a cor: ");
    let grau_E = prompt("Digite o grau da lente 1: ");
    let grau_D = prompt("Digite o grau da lente 2: ");
    let armacao = prompt("Digite modelo de armação: ");

    // Neste trecho estamos declarando um objeto
    const oculos = {
      codigo: codigo,
      cor: cor,
      grau_E: grau_E,
      grau_D: grau_D,
      armacao: armacao
    }
    // Chamar a função inserir
    inserir_oculos(oculos);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Óculos...\n");
    let codigo = prompt("Digite o código do oculos: ");
    // Chamar a função excluir
    excluir_oculos(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Óculos...\n");
    // Chamar a função listar
    listar_oculoss()
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_oculos(oculos) {
  // Implementar corpo da função
  array_oculos.push(oculos);
}

function excluir_oculos(codigo) {
  // Implementar corpo da função
  
}


function listar_oculoss() {
  // Implementar corpo da função
  if (array_oculos.length === 0) {
    console.log("Nenhum oculos cadastrado.");
  } else {
    console.log("Lista de Óculos:");
    array_oculos.forEach(oculos => {
      console.log("Código:", oculos.codigo);
      console.log("Cor:", oculos.cor);
      console.log("Grau Esquerdo:", oculos.grau_E);
      console.log("Grau Direito:", oculos.grau_D);
      console.log("Modelo Armação:", oculos.armacao);
      console.log("------------");
    });
  }
}