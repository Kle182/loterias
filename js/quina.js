function gerarJogos() {
  var quantidade = parseInt(document.getElementById("quina-quantidade").value);
  var resultado = document.getElementById("quina-resultado");
  var valorTotalElement = document.getElementById("quina-valor-total");

  resultado.innerHTML = ""; // Limpa resultados anteriores
  valorTotalElement.innerHTML = ""; // Limpa valor total anterior

  for (var i = 0; i < quantidade; i++) {
    var jogo = gerarJogo();
    var jogoHTML = "<p><strong>Jogo " + (i + 1) + ": </strong>";

    for (var j = 0; j < jogo.length; j++) {
      jogoHTML += '<span class="numero">' + jogo[j] + '</span>';
    }

    jogoHTML += "</p>";
    resultado.innerHTML += jogoHTML;
  }

  var valorCalculado = quantidade * 2.50;
  valorTotalElement.innerHTML = "<strong>Valor do Jogo R$: " + valorCalculado.toFixed(2) + "</strong>";
}

function gerarJogo() {
  var numeros = [];

  while (numeros.length < 5) {
    var numero = Math.floor(Math.random() * 80) + 1;

    if (numeros.indexOf(numero) === -1) {
      numeros.push(numero);
    }
  }

  numeros.sort(function(a, b) {
    return a - b;
  });

  return numeros;
}

function limparCampos() {
  document.getElementById("quina-quantidade").value = "1";
  document.getElementById("quina-resultado").innerHTML = "";
  document.getElementById("quina-valor-total").innerHTML = "";
}