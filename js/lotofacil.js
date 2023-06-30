function gerarJogos() {
  var quantidade = parseInt(document.getElementById("quantidade").value);
  var resultado = document.getElementById("resultado");
  var valorTotalElement = document.getElementById("valor-total");

  resultado.innerHTML = ""; // Limpa resultados anteriores
  valorTotalElement.innerHTML = ""; // Limpa valor total anterior

  for (var i = 0; i < quantidade; i++) {
    var jogo = gerarJogo();
    var jogoHTML = "<p><strong>Jogo " + (i + 1) + ":</strong> ";

    for (var j = 0; j < jogo.length; j++) {
      jogoHTML += '<span class="numero">' + jogo[j] + '</span>';
    }

    jogoHTML += "</p>";
    resultado.innerHTML += jogoHTML;
  }

  var valorCalculado = quantidade * 3.00;
  valorTotalElement.innerHTML = "<strong>Valor do Jogo R$: " + valorCalculado.toFixed(2) + "</strong>";
}

function gerarJogo() {
  var numeros = [];

  while (numeros.length < 15) {
    var numero = Math.floor(Math.random() * 25) + 1;

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
  document.getElementById("quantidade").value = "1";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "";
}