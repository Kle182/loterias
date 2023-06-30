function gerarJogos() {
  var quantidade = parseInt(document.getElementById("supersete-quantidade").value);
  var resultado = document.getElementById("supersete-resultado");
  var valorTotalElement = document.getElementById("supersete-valor-total");

  resultado.innerHTML = ""; // Limpa resultados anteriores
  valorTotalElement.innerHTML = ""; // Limpa valor total anterior

  // Cria a estrutura das colunas
  var colunasHTML = "<div class='coluna'>1</div> | <div class='coluna'>2</div> | <div class='coluna'>3</div> | <div class='coluna'>4</div> | <div class='coluna'>5</div> | <div class='coluna'>6</div> | <div class='coluna'>7</div>";

  for (var i = 0; i < quantidade; i++) {
    var jogo = gerarJogo();
    var jogoHTML = "<div class='jogo'><strong>Jogo " + (i + 1) + ":</strong><br>";

    // Exibe os números fixos acima de cada número gerado
    for (var j = 0; j < 7; j++) {
      jogoHTML += "<span class='valor'>" + (j + 1) + "</span> | ";
    }
    jogoHTML += "<br>";

    // Exibe os números abaixo de cada coluna
    for (var k = 0; k < jogo.length; k++) {
      jogoHTML += "<span class='numero'>" + jogo[k] + "</span> | ";
    }

    jogoHTML += "</div>";
    resultado.innerHTML += jogoHTML;
  }

  var valorCalculado = quantidade * 3;
  valorTotalElement.innerHTML = "<strong>Valor do Jogo R$: " + valorCalculado.toFixed(2) + "</strong>";
}

function gerarJogo() {
  var numeros = [];

  while (numeros.length < 7) {
    var numero = Math.floor(Math.random() * 10);
    numeros.push(numero);
  }

  return numeros;
}

function limparCampos() {
  document.getElementById("supersete-quantidade").value = "1";
  document.getElementById("supersete-resultado").innerHTML = "";
  document.getElementById("supersete-valor-total").innerHTML = "";
}